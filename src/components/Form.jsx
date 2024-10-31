import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FiUploadCloud } from 'react-icons/fi';

const Form = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState('');
  const [frame, setFrame] = useState('default');
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const generateURL = () => {
    const uniqueId = uuidv4();
    const data = { image: preview, message, frame };
    localStorage.setItem(uniqueId, JSON.stringify(data));
    navigate(`/greeting/${uniqueId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-8">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">
        🎇 Diwali Greeting Generator 🎆
      </h1>

      <label
        htmlFor="image-upload"
        className="flex flex-col items-center justify-center w-80 h-52 border-2 border-dashed border-indigo-500 rounded-lg cursor-pointer hover:border-solid hover:bg-indigo-100 transition-all duration-300"
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <FiUploadCloud className="text-4xl text-indigo-500 mb-2" />
            <p className="text-indigo-500 font-medium">Click to Upload or Drag & Drop</p>
            <p className="text-gray-400 text-sm">(Only images are allowed)</p>
          </div>
        )}
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </label>

      <textarea
        placeholder="Enter your Diwali message"
        className="border mt-4 p-3 w-80 rounded-lg shadow-md "
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <select
        className="border mt-4 p-3 w-80 rounded-lg shadow-md"
        value={frame}
        onChange={(e) => setFrame(e.target.value)}
      >
        <option value="default">Default Frame</option>
        <option value="diyas">Diya Frame</option>
        <option value="rangoli">Rangoli Frame</option>
      </select>

      <button
        className="bg-indigo-600 hover:bg-pink-500 text-white py-2 px-6 mt-4 rounded-lg transition-all duration-300"
        onClick={generateURL}
      >
        Generate Greeting 🎉
      </button>
    </div>
  );
};

export default Form;
