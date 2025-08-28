import React, { useState, useCallback, useMemo, useEffect } from 'react';
import type { CyclePrediction } from '../types';
import { CalendarIcon, SparklesIcon, OvulationIcon, PmsIcon, CycleIcon, DropletIcon, ChevronDownIcon } from '../components/Icons';
import { useLocalization } from '../hooks/useLocalization';
import { gregorianToHijri, hijriToGregorian } from '../utils/hijri';

const HomePage: React.FC = () => {
  const { t, dir } = useLocalization();
  
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [periodDuration, setPeriodDuration] = useState<number>(5);
  const [predictions, setPredictions] = useState<CyclePrediction[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [invalidField, setInvalidField] = useState<'day' | 'month' | 'year' | null>(null);
  const [activePredictionIndex, setActivePredictionIndex] = useState<number>(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [calendar, setCalendar] = useState<'gregorian' | 'hijri'>('gregorian');

  useEffect(() => {
    setSelectedDay('');
    setSelectedMonth('');
    setSelectedYear('');
    setPredictions(null);
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

  const cycleLengthOptions = Array.from({ length: 51 }, (_, i) => i + 10);
  const periodDurationOptions = Array.from({ length: 15 }, (_, i) => i + 1);

  const handleCalculate = useCallback(() => {
    setError(null);
    setInvalidField(null);

    if (!selectedDay || !selectedMonth || !selectedYear) {
      setError(t.homePage.errors.fullDate);
      setPredictions(null);
      return;
    }
    
    let startDate: Date;
    const year = parseInt(selectedYear);
    const month = parseInt(selectedMonth);
    const day = parseInt(selectedDay);

    if (calendar === 'hijri') {
      const gregorianDate = hijriToGregorian(year, month, day);
      const [hYear, hMonth, hDay] = gregorianToHijri(gregorianDate.getFullYear(), gregorianDate.getMonth() + 1, gregorianDate.getDate());

      if (hDay !== day || hMonth !== month || hYear !== year) {
        setError(t.homePage.errors.invalidDate);
        setInvalidField('day');
        setPredictions(null);
        return;
      }
      startDate = gregorianDate;
    } else {
      startDate = new Date(year, month - 1, day);
      if (startDate.getFullYear() !== year || startDate.getMonth() !== month - 1 || startDate.getDate() !== day) {
        setError(t.homePage.errors.invalidDate);
        setInvalidField('day');
        setPredictions(null);
        return;
      }
    }

    const newPredictions: CyclePrediction[] = [];
    for (let i = 1; i <= 3; i++) {
      const nextPeriod = new Date(startDate);
      nextPeriod.setDate(startDate.getDate() + cycleLength * i);
      const ovulationDate = new Date(nextPeriod);
      ovulationDate.setDate(nextPeriod.getDate() - 14);
      const fertileStart = new Date(ovulationDate);
      fertileStart.setDate(ovulationDate.getDate() - 5);
      const fertileEnd = new Date(ovulationDate);
      const pmsEnd = new Date(nextPeriod);
      pmsEnd.setDate(nextPeriod.getDate() - 1);
      const pmsStart = new Date(nextPeriod);
      pmsStart.setDate(nextPeriod.getDate() - 10);
      
      newPredictions.push({
        nextPeriodDate: nextPeriod,
        fertileWindowStart: fertileStart,
        fertileWindowEnd: fertileEnd,
        ovulationDate: ovulationDate,
        pmsWindowStart: pmsStart,
        pmsWindowEnd: pmsEnd,
      });
    }
    setPredictions(newPredictions);
    setActivePredictionIndex(0);
  }, [selectedDay, selectedMonth, selectedYear, cycleLength, calendar, t]);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString(t.code, { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handleDateChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    setter(e.target.value);
    if (error || invalidField) {
      setError(null);
      setInvalidField(null);
    }
    setPredictions(null);
  };

  const getSelectClassName = (fieldName: 'day' | 'month' | 'year'): string => {
    const baseClasses = "w-full p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500 transition-colors";
    return invalidField === fieldName ? `${baseClasses} border-red-500 ring-2 ring-red-300` : `${baseClasses} border-gray-300`;
  };

  const PredictionResultCard = ({ prediction, cycleLength, periodDuration }: { prediction: CyclePrediction; cycleLength: number; periodDuration: number; }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const nextPeriodDay = new Date(prediction.nextPeriodDate);
    nextPeriodDay.setHours(0, 0, 0, 0);
    const daysUntil = Math.round((nextPeriodDay.getTime() - today.getTime()) / (1000 * 3600 * 24));

    return (
      <div className="text-center bg-purple-50 rounded-xl shadow-inner transition-all duration-300 animate-fade-in space-y-4 p-4 sm:p-6">
        <div>
          <p className="text-purple-600 text-md">{t.homePage.results.nextPeriodIn}</p>
          <p className="text-5xl font-bold text-purple-800 my-2">{daysUntil >= 0 ? `${daysUntil} ${t.days}` : t.homePage.results.itsTime}</p>
          <div className="flex items-center justify-center text-gray-700 font-medium bg-white px-4 py-2 rounded-full shadow-sm">
            <CalendarIcon className="mx-2 text-purple-500" />
            <span>{formatDate(prediction.nextPeriodDate)}</span>
          </div>
        </div>
        <div className="space-y-3 pt-4 border-t border-purple-200">
          <div className="flex items-start text-right p-3 bg-white rounded-lg shadow-sm">
            <OvulationIcon className="w-8 h-8 text-indigo-500 ms-4 flex-shrink-0"/>
            <div className='text-start'>
              <h4 className="font-bold text-gray-800">{t.homePage.results.ovulationDate}</h4>
              <p className="font-semibold text-indigo-600 text-sm">{formatDate(prediction.ovulationDate)}</p>
            </div>
          </div>
          <div className="flex items-start text-right p-3 bg-pink-100 rounded-lg shadow-sm border-s-4 border-pink-400">
            <SparklesIcon className="w-8 h-8 text-pink-500 ms-4 flex-shrink-0"/>
            <div className='text-start'>
              <h4 className="font-bold text-pink-800">{t.homePage.results.fertileWindow}</h4>
              <p className="font-semibold text-pink-700 text-sm">{t.from} {formatDate(prediction.fertileWindowStart)} {t.to} {formatDate(prediction.fertileWindowEnd)}</p>
            </div>
          </div>
          <div className="flex items-start text-right p-3 bg-white rounded-lg shadow-sm">
            <PmsIcon className="w-8 h-8 text-orange-500 ms-4 flex-shrink-0"/>
            <div className='text-start'>
              <h4 className="font-bold text-gray-800">{t.homePage.results.pmsWindow}</h4>
              <p className="font-semibold text-orange-600 text-sm">{t.homePage.results.pmsStart} {formatDate(prediction.pmsWindowStart)}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-gray-100 p-4 rounded-lg flex justify-around text-center border-t-2 border-gray-200">
          <div className="flex items-center">
            <CycleIcon className="w-6 h-6 text-purple-600 mx-2"/>
            <div>
              <p className="text-xs text-gray-600">{t.homePage.form.cycleLength}</p>
              <p className="font-bold text-md text-purple-800">{cycleLength} {t.days}</p>
            </div>
          </div>
          <div className="flex items-center">
            <DropletIcon className="w-6 h-6 text-red-500 mx-2"/>
            <div>
              <p className="text-xs text-gray-600">{t.homePage.form.periodDuration}</p>
              <p className="font-bold text-md text-purple-800">{periodDuration} {t.days}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 sm:p-10 transform transition-all duration-300">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-700">{t.homePage.title}</h1>
          <p className="text-gray-500 mt-2">{t.homePage.subtitle}</p>
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
            <label className="block text-md font-medium text-gray-700 mb-2 text-start">{t.homePage.form.lastPeriodDate}</label>
            <div className="grid grid-cols-3 gap-2">
              <select name="day" id="day" value={selectedDay} onChange={handleDateChange(setSelectedDay)} required className={getSelectClassName('day')}><option value="" disabled>{t.day}</option>{dateOptions.days.map(day => <option key={day} value={day}>{day}</option>)}</select>
              <select name="month" id="month" value={selectedMonth} onChange={handleDateChange(setSelectedMonth)} required className={getSelectClassName('month')}><option value="" disabled>{t.month}</option>{dateOptions.months.map(month => <option key={month.value} value={month.value}>{month.name}</option>)}</select>
              <select name="year" id="year" value={selectedYear} onChange={handleDateChange(setSelectedYear)} required className={getSelectClassName('year')}><option value="" disabled>{t.year}</option>{dateOptions.years.map(year => <option key={year} value={year}>{year}</option>)}</select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="cycle-length" className="block text-md font-medium text-gray-700 mb-2 text-start">{t.homePage.form.cycleLength} ({t.days})</label>
              <select id="cycle-length" value={cycleLength} onChange={(e) => setCycleLength(parseInt(e.target.value, 10))} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition-colors">{cycleLengthOptions.map(day => <option key={day} value={day}>{day}</option>)}</select>
            </div>
            <div>
              <label htmlFor="period-duration" className="block text-md font-medium text-gray-700 mb-2 text-start">{t.homePage.form.periodDuration} ({t.days})</label>
              <select id="period-duration" value={periodDuration} onChange={(e) => setPeriodDuration(parseInt(e.target.value, 10))} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition-colors">{periodDurationOptions.map(day => <option key={day} value={day}>{day}</option>)}</select>
            </div>
          </div>
          {error && <p id="date-error" className="text-red-500 text-sm text-center">{error}</p>}
          <button type="submit" className="w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-transform transform hover:scale-105">{t.calculate}</button>
        </form>
        {predictions && predictions.length > 0 && (
          <div className="mt-10 border-t pt-6">
            <h2 className="text-2xl font-bold text-center text-purple-700 mb-4">{t.results}</h2>
            <div className="flex justify-center border-b border-gray-200 mb-6">
              {predictions.map((_, index) => (
                <button key={index} onClick={() => setActivePredictionIndex(index)} className={`flex-1 sm:flex-none sm:px-4 py-3 font-semibold text-sm transition-colors duration-300 ${activePredictionIndex === index ? 'border-b-2 border-purple-600 text-purple-700' : 'text-gray-500 hover:text-purple-600'}`}>{t.homePage.results.tabs[index]}</button>
              ))}
            </div>
            <PredictionResultCard prediction={predictions[activePredictionIndex]} cycleLength={cycleLength} periodDuration={periodDuration} />
            <p className="text-center text-xs text-gray-500 mt-6 p-2 bg-gray-50 rounded-md">{t.homePage.disclaimer}</p>
          </div>
        )}
      </div>

      <div className="w-full max-w-3xl mx-auto mt-12 px-4 sm:px-0">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 text-center mb-8">
            {t.homePage.faq.title}
          </h2>
          <div className="space-y-4">
            {t.homePage.faq.items.map((item, index) => (
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
                    <p>{item.content}</p>
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

export default HomePage;