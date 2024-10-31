import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const GreetingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(id));
    if (!savedData) {
      alert('Greeting not found!');
      navigate('/');
    } else {
      setData(savedData);
    }
  }, [id, navigate]);

  if (!data) return <p>Loading...</p>;

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-300 to-orange-400 p-8"
    >
      <div className="relative bg-white p-6 rounded-lg shadow-2xl max-w-md w-full">
        {/* Frame */}
        <div className={`frame-${data.frame} w-full h-60 rounded-lg overflow-hidden`}>
          <img
            src={data.image}
            alt="Greeting Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-6">
          {/* Greeting Message */}
          <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-4">
            🎆 Happy Diwali! 🎇
          </h2>
          <p className="text-lg text-center font-medium text-gray-600 italic">
            "{data.message}"
          </p>
        </div>

        <button
          className="mt-6 bg-indigo-600 text-white py-2 px-6 rounded-lg w-full hover:bg-indigo-700 transition-all"
          onClick={() => navigate('/')}
        >
          Create Another Greeting 🎉
        </button>
      </div>
    </div>
  );
};

export default GreetingPage;
