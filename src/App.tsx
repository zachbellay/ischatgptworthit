import { useState } from 'react';
import './App.css'
import CallingCard from './CallingCard';
import { Button, Tooltip } from 'flowbite-react';

const App = () => {
  const [hourlyRate, setHourlyRate] = useState('');
  const [minutesSaved, setMinutesSaved] = useState('');
  const gptCost = 20;

  const daysWorkedPerMonth = 20;

  const timeSaved = parseInt(minutesSaved) ? parseInt(minutesSaved) * daysWorkedPerMonth : 0;
  const moneySaved = (parseInt(hourlyRate) ? parseInt(hourlyRate) : 0) * timeSaved / 60;
  const netGain = moneySaved - gptCost;


  const isDefinedAndNonZero = (val: string | number) => val !== undefined && val !== null && val !== 0;

  return (
    <div className="mx-auto max-w-lg bg-light-gray p-4 pt-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-4">Is ChatGPT Worth It?</h1>
      </div>

      <div className="p-6 bg-white rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            ChatGPT Plus Subscription Cost
          </label>
          <input
            disabled
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            type="text"
            value="$20/month"
          />
        </div>
        <div className="mb-4 input-icon">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Your Hourly Rate
          </label>
          <i>$</i>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight pl-5"
            type="number"
            step="0.01"
            min="0"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
          />

        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Minutes Saved Using ChatGPT per Day
          </label>
          <div className="flex">
            <input
              className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight"
              type="number"
              min="0"
              value={minutesSaved}
              onChange={(e) => setMinutesSaved(e.target.value)}
            />
          </div>
        </div>

      </div>

      <div className="p-6 rounded-lg">
        <table className="w-full whitespace-nowrap">
          <tr className="border-0">
            <td className="text-lg font-semibold pr-16 py-1">You would save:</td>
            <td className="py-1">{timeSaved} minutes/month</td>
          </tr>
          <tr className="border-0">
            <td className="text-lg font-semibold py-1">Which is worth:</td>
            <td className="py-1 flex items-center">
              <span className="pr-2">
                ${moneySaved.toFixed(0)}/month
              </span>
              <Tooltip content="Assuming 20 days worked per month">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </Tooltip>
            </td>
          </tr>
          <tr className="border-0">
            <td className="py-1"></td>
            <td className="text-sm text-neutral-500 py-1">-$20/month ChatGPT Plus Subscription</td>
          </tr>
          <tr className="border-0">
            <td className="text-lg font-semibold py-1">You net:</td>
            <td className="text-xl font-semibold py-1">${netGain.toFixed(0)}/month</td>
          </tr>
        </table>
      </div>


      {isDefinedAndNonZero(timeSaved) && isDefinedAndNonZero(moneySaved) &&
        <div>
          <div className="p-6 mt-4 bg-white rounded-lg">
            <div className="mt-4 text-center text-8xl font-semibold">
              {netGain >= 0 ? "YES" : "NO"}
            </div>
          </div>

          {(netGain >= 0) &&
            <div className="mt-8 flex items-center justify-center">
              <a href="https://openai.com/blog/chatgpt-plus">
                <Button color="success">
                  Get ChatGPT Plus
                </Button>
              </a>
            </div>
          }

        </div>

      }




      <CallingCard />
    </div>
  );
};

export default App;
