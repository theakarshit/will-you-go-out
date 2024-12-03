import React, { useState } from 'react';
import { Heart, Camera, Lock, ArrowRight } from 'lucide-react';

const WillYouGoOutWebsite = () => {
  const [page, setPage] = useState('landing');
  const [selectedMemory, setSelectedMemory] = useState(null);

  // Updated Memories with personal stories
  const memories = [
    { 
      id: 1, 
      text: "Our first meet at the office 🏢", 
      hint: "Common, I don't exactly remember the first meet. It was the 2nd meet when I spilled the glass of water."
    },
    { 
      id: 2, 
      text: "Unplanned destiny cafe in Goa 🌴☕", 
      hint: "Did I plan to take us to the same cafe intentionally? What do you think?"
    },
    { 
      id: 3, 
      text: "Metro travel in Delhi 🚇", 
      hint: "That was fun. My first time experiencing something like this in a public transport, that too a crowded one."
    }
  ];

  // Landing Page
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-3xl font-bold text-purple-800 mb-8">
        Hey Harshika, I've got a question for you…
      </h1>
      <button 
        onClick={() => setPage('question')}
        className="bg-pink-500 text-white px-8 py-4 rounded-full text-xl 
                   transform hover:scale-110 transition-transform duration-300 
                   hover:bg-pink-600 shadow-lg hover:shadow-xl"
      >
        Click to Continue
        <Heart className="inline-block ml-2 animate-pulse" />
      </button>
    </div>
  );

  // Question Page
  const QuestionPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-2xl font-semibold text-purple-800 mb-8">
        You've been on my mind a lot lately, and I thought, why not make this extra special? 
        Would you go on another date with me?
      </h2>
      <p className="text-sm text-purple-600 italic mb-4">
        I know we haven't been in touch over the past few days, caught up in our whirlwind of work and schedules. 
        But I wanted to bring back that magical Goa vibe – our special connection that feels like destiny calling.
      </p>
      <div className="flex space-x-4">
        <button 
          onClick={() => setPage('details')}
          className="bg-green-500 text-white px-6 py-3 rounded-full 
                     hover:bg-green-600 transition-colors duration-300"
        >
          Yes, let's do it!
          <Heart className="inline-block ml-2" fill="white" />
        </button>
        <button 
          onClick={() => setPage('details')}
          className="bg-blue-500 text-white px-6 py-3 rounded-full 
                     hover:bg-blue-600 transition-colors duration-300"
        >
          Hmm, tell me more!
          <ArrowRight className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );

  // Details Page
  const DetailsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-2xl font-semibold text-purple-800 mb-6">
        'Snapshots of Us': A Fun Adventure!
      </h2>
      <p className="text-lg text-pink-700 mb-8">
        I've put together something special—a fun little adventure where we'll revisit our favorite moments, 
        capture new ones, and enjoy some surprises along the way.
      </p>
      
      <div className="mt-8">
        <textarea 
          placeholder="Got any ideas to make it even better? Let me know!"
          className="w-full p-4 rounded-lg border-2 border-purple-200 focus:border-pink-500"
          rows="4"
        ></textarea>
        <button 
          className="mt-4 bg-pink-500 text-white px-6 py-3 rounded-full 
                     hover:bg-pink-600 transition-colors duration-300"
          onClick={() => setPage('confirmation')}
        >
          Yes, I'm in!
          <Heart className="inline-block ml-2" fill="white" />
        </button>
      </div>
    </div>
  );

  // Confirmation Page
  const ConfirmationPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-3xl font-bold text-purple-800 mb-6">
        How about a day called 'Snapshots of Us'—a little adventure with photos, surprises, and fun to celebrate us?
      </h2>
      <p className="text-xl text-pink-700 mb-8">
        Thanks for saying 'yes'! I can't wait to make more memories with you.
      </p>
      
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h3 className="text-xl font-bold text-purple-700 mb-4">
          Our Memories
        </h3>
        {memories.map((memory) => (
          <div 
            key={memory.id}
            onClick={() => setSelectedMemory(memory)}
            className="cursor-pointer bg-pink-100 p-4 rounded-lg mb-4 
                       hover:bg-pink-200 transition-colors duration-300"
          >
            <Camera className="inline-block mr-2 text-purple-600" />
            {memory.text}
          </div>
        ))}
      </div>

      {selectedMemory && (
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h4 className="text-lg font-semibold text-purple-800">
            {selectedMemory.text}
          </h4>
          <p className="text-pink-700">{selectedMemory.hint}</p>
        </div>
      )}

      <div className="text-center flex flex-col items-center">
        <p className="text-lg text-purple-600 animate-bounce mb-4">
          This is just a glimpse of what is about to come. The next update is at 11 pm, 4th Dec.
        </p>
        <button 
          disabled
          className="bg-gray-300 text-gray-500 px-8 py-4 rounded-xl 
                     opacity-60 cursor-not-allowed flex flex-col items-center"
        >
          <span className="text-lg mb-2">View the ***</span>
          <span className="text-sm">
            <Lock className="inline-block mr-1 w-4 h-4" />
            Unlocks 11 pm, 4th Dec
          </span>
        </button>
      </div>
    </div>
  );

  // Render page based on current state
  const renderPage = () => {
    switch(page) {
      case 'landing': return <LandingPage />;
      case 'question': return <QuestionPage />;
      case 'confirmation': return <ConfirmationPage />;
      case 'details': return <DetailsPage />;
      default: return <LandingPage />;
    }
  };

  return (
    <div className="font-sans">
      {renderPage()}
    </div>
  );
};

export default WillYouGoOutWebsite;
