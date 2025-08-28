import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { GiftIcon, HeartIcon, BabyIcon, ChevronDownIcon } from '../components/Icons';
import { useLocalization } from '../hooks/useLocalization';
import { gregorianToHijri, hijriToGregorian } from '../utils/hijri';

interface PregnancyPrediction {
  dueDate: Date;
  gestationalWeeks: number;
  gestationalDays: number;
  conceptionDate: Date;
  endOfFirstTrimester: Date;
  endOfSecondTrimester: Date;
}

const PregnancyCalculatorPage: React.FC = () => {
  const { t, dir } = useLocalization();

  const [selectedDay, setSelectedDay] = useState<string>('');
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [prediction, setPrediction] = useState<PregnancyPrediction | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [invalidField, setInvalidField] = useState<'day' | 'month' | 'year' | null>(null);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [calendar, setCalendar] = useState<'gregorian' | 'hijri'>('gregorian');

  useEffect(() => {
    setSelectedDay('');
    setSelectedMonth('');
    setSelectedYear('');
    setPrediction(null);
    setError(null);
    setInvalidField(null);
  }, [calendar]);

  const dateOptions = useMemo(() => {
    if (calendar === 'hijri') {
        const today = new Date();
        const [currentHijriYear] = gregorianToHijri(today.getFullYear(), today.getMonth() + 1, today.getDate());
        const years = [currentHijriYear, currentHijriYear - 1];
        const months = t.hijriMonths.map((name, index) => ({ value: (index + 1).toString(), name }));
        const days = Array.from({ length: 30 }, (_, i) => i + 1);
        return { years, months, days };
    }
    // Gregorian (default)
    const currentYear = new Date().getFullYear();
    const years = [currentYear, currentYear - 1];
    const months = t.months.map((name, index) => ({ value: (index + 1).toString(), name }));
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    return { years, months, days };
  }, [calendar, t]);

  const handleCalculate = useCallback(() => {
    setError(null);
    setInvalidField(null);

    if (!selectedDay || !selectedMonth || !selectedYear) {
      setError(t.pregnancyPage.errors.fullDate);
      setPrediction(null);
      return;
    }

    let lmpDate: Date;
    const year = parseInt(selectedYear);
    const month = parseInt(selectedMonth);
    const day = parseInt(selectedDay);

    if (calendar === 'hijri') {
      const gregorianDate = hijriToGregorian(year, month, day);
      const [hYear, hMonth, hDay] = gregorianToHijri(gregorianDate.getFullYear(), gregorianDate.getMonth() + 1, gregorianDate.getDate());

      if (hDay !== day || hMonth !== month || hYear !== year) {
        setError(t.pregnancyPage.errors.invalidDate);
        setInvalidField('day');
        setPrediction(null);
        return;
      }
      lmpDate = gregorianDate;
    } else {
      lmpDate = new Date(year, month - 1, day);
      if (lmpDate.getFullYear() !== year || lmpDate.getMonth() !== month - 1 || lmpDate.getDate() !== day) {
        setError(t.pregnancyPage.errors.invalidDate);
        setInvalidField('day');
        setPrediction(null);
        return;
      }
    }


    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const timeDiff = today.getTime() - lmpDate.getTime();
    if(timeDiff < 0) {
      setError(t.pregnancyPage.errors.futureDate);
      setPrediction(null);
      return;
    }

    const gestationalAgeInDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const gestationalWeeks = Math.floor(gestationalAgeInDays / 7);
    const gestationalDays = gestationalAgeInDays % 7;
    
    const dueDate = new Date(lmpDate.getTime() + 280 * 24 * 60 * 60 * 1000);
    const conceptionDate = new Date(lmpDate.getTime() + 14 * 24 * 60 * 60 * 1000);
    const endOfFirstTrimester = new Date(lmpDate.getTime() + (13 * 7 + 6) * 24 * 60 * 60 * 1000);
    const endOfSecondTrimester = new Date(lmpDate.getTime() + (27 * 7 + 6) * 24 * 60 * 60 * 1000);

    setPrediction({
      dueDate,
      gestationalWeeks,
      gestationalDays,
      conceptionDate,
      endOfFirstTrimester,
      endOfSecondTrimester,
    });

  }, [selectedDay, selectedMonth, selectedYear, calendar, t]);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString(t.code, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handleDateChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    setter(e.target.value);
    if (error || invalidField) {
      setError(null);
      setInvalidField(null);
    }
    setPrediction(null);
  };

  const getSelectClassName = (fieldName: 'day' | 'month' | 'year'): string => {
    const baseClasses = "w-full p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500 transition-colors";
    return invalidField === fieldName ? `${baseClasses} border-red-500 ring-2 ring-red-300` : `${baseClasses} border-gray-300`;
  };

  const PredictionResultCard = ({ prediction }: { prediction: PregnancyPrediction }) => {
    return (
      <div className="text-center bg-purple-50 rounded-xl shadow-inner transition-all duration-300 animate-fade-in space-y-4 p-4 sm:p-6">
        <div>
          <p className="text-purple-600 text-md">{t.pregnancyPage.results.dueDateIs}</p>
          <div className="flex items-center justify-center text-gray-700 font-bold bg-white px-4 py-2 my-2 rounded-full shadow-sm text-lg">
            <GiftIcon className="w-6 h-6 mx-2 text-purple-500" />
            <span>{formatDate(prediction.dueDate)}</span>
          </div>
          <p className="text-3xl font-bold text-purple-800 my-4">
            {t.pregnancyPage.results.youAreInWeek.replace('{weeks}', prediction.gestationalWeeks.toString()).replace('{days}', prediction.gestationalDays.toString())}
          </p>
        </div>
        <div className="space-y-3 pt-4 border-t border-purple-200">
          <div className="flex items-start text-right p-3 bg-white rounded-lg shadow-sm">
            <HeartIcon className="w-8 h-8 text-pink-500 ms-4 flex-shrink-0"/>
            <div className='text-start'>
              <h4 className="font-bold text-gray-800">{t.pregnancyPage.results.conceptionDate}</h4>
              <p className="font-semibold text-pink-600 text-sm">{formatDate(prediction.conceptionDate)}</p>
            </div>
          </div>
          <div className="flex items-start text-right p-3 bg-white rounded-lg shadow-sm">
            <BabyIcon className="w-8 h-8 text-indigo-500 ms-4 flex-shrink-0"/>
            <div className='text-start'>
              <h4 className="font-bold text-gray-800">{t.pregnancyPage.results.endOfFirstTrimester}</h4>
              <p className="font-semibold text-indigo-600 text-sm">{formatDate(prediction.endOfFirstTrimester)}</p>
            </div>
          </div>
          <div className="flex items-start text-right p-3 bg-white rounded-lg shadow-sm">
            <BabyIcon className="w-8 h-8 text-teal-500 ms-4 flex-shrink-0"/>
            <div className='text-start'>
              <h4 className="font-bold text-gray-800">{t.pregnancyPage.results.endOfSecondTrimester}</h4>
              <p className="font-semibold text-teal-600 text-sm">{formatDate(prediction.endOfSecondTrimester)}</p>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-6 p-2 bg-gray-50 rounded-md">{t.pregnancyPage.disclaimer}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-10 transform transition-all duration-300">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-700">{t.pregnancyPage.title}</h1>
          <p className="text-gray-500 mt-2">{t.pregnancyPage.subtitle}</p>
        </div>
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}>
          {dir === 'rtl' && (
            <div>
              <label className="block text-md font-medium text-gray-700 mb-2 text-start">{t.calendar.type}</label>
              <div className="flex items-center space-x-4" dir="rtl">
                <label className="flex items-center">
                  <input type="radio" name="calendarType" value="gregorian" checked={calendar === 'gregorian'} onChange={() => setCalendar('gregorian')} className="form-radio text-purple-600 focus:ring-purple-500" />
                  <span className="mx-2 text-gray-700">{t.calendar.gregorian}</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="calendarType" value="hijri" checked={calendar === 'hijri'} onChange={() => setCalendar('hijri')} className="form-radio text-purple-600 focus:ring-purple-500" />
                  <span className="mx-2 text-gray-700">{t.calendar.hijri}</span>
                </label>
              </div>
            </div>
          )}
          <div>
            <label className="block text-md font-medium text-gray-700 mb-2 text-start">{t.pregnancyPage.form.lastPeriodDate}</label>
            <div className="grid grid-cols-3 gap-2">
              <select name="day" id="day" value={selectedDay} onChange={handleDateChange(setSelectedDay)} required className={getSelectClassName('day')}><option value="" disabled>{t.day}</option>{dateOptions.days.map(day => <option key={day} value={day}>{day}</option>)}</select>
              <select name="month" id="month" value={selectedMonth} onChange={handleDateChange(setSelectedMonth)} required className={getSelectClassName('month')}><option value="" disabled>{t.month}</option>{dateOptions.months.map(month => <option key={month.value} value={month.value}>{month.name}</option>)}</select>
              <select name="year" id="year" value={selectedYear} onChange={handleDateChange(setSelectedYear)} required className={getSelectClassName('year')}><option value="" disabled>{t.year}</option>{dateOptions.years.map(year => <option key={year} value={year}>{year}</option>)}</select>
            </div>
          </div>

          {error && <p id="date-error" className="text-red-500 text-sm text-center">{error}</p>}
          <div className="pt-2">
            <button type="submit" className="w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-transform transform hover:scale-105">{t.pregnancyPage.calculateButton}</button>
          </div>
        </form>
        {prediction && (
          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold text-center text-purple-700 mb-4">{t.results}</h2>
            <PredictionResultCard prediction={prediction} />
          </div>
        )}
      </div>

      <div className="w-full max-w-3xl mx-auto mt-12 px-4 sm:px-0">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 text-center mb-8">
            {t.pregnancyPage.info.title}
          </h2>
          <div className="space-y-4">
            {t.pregnancyPage.info.items.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full flex justify-between items-center p-4 text-start font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none"
                >
                  <span className="text-lg">{item.title}</span>
                  <ChevronDownIcon className={`w-6 h-6 text-purple-500 transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === index ? 'max-h-[500px]' : 'max-h-0'}`}
                >
                  <div className="p-4 pt-0 text-gray-600 leading-relaxed text-start">
                    <p style={{whiteSpace: 'pre-line'}}>{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PregnancyCalculatorPage;