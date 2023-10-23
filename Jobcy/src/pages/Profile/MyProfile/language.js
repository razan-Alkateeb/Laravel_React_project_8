import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserLanguages() {
  const [user, setUser] = useState({});
  const [languages, setLanguages] = useState([]);
  const [newLanguage, setNewLanguage] = useState({ name: '', level: '' });
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const userId = 1; // Replace with the user's ID

  useEffect(() => {
    // Fetch user and languages data
    axios.get(`http://127.0.0.1:8000/api/userlanguage/${userId}`)
      .then(response => {
        setUser(response.data);
        setLanguages(response.data.languages);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const addLanguage = () => {
    axios.post(`http://127.0.0.1:8000/api/userlanguage/${userId}/languages`, newLanguage)
      .then(response => {
        setLanguages([...languages, response.data]);
        setNewLanguage({ name: '', level: '' });
      })
      .catch(error => {
        console.error('Error adding language:', error);
      });
  };

  const updateLanguage = () => {
    if (selectedLanguage) {
      const languageId = selectedLanguage.id;
      axios.put(`http://127.0.0.1:8000/api/userlanguage/${userId}/languages/${languageId}`, selectedLanguage)
        .then(response => {
          const updatedLanguages = languages.map(language => (language.id === languageId ? response.data : language));
          setLanguages(updatedLanguages);
          setSelectedLanguage(null);
        })
        .catch(error => {
          console.error('Error updating language:', error);
        });
    }
  };

  const deleteLanguage = (languageId) => {
    axios.delete(`http://127.0.0.1:8000/api/userlanguage/${userId}/languages/${languageId}`)
      .then(() => {
        const updatedLanguages = languages.filter(language => language.id !== languageId);
        setLanguages(updatedLanguages);
      })
      .catch(error => {
        console.error('Error deleting language:', error);
      });
  };

  const editLanguage = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div>
      <h1>User Profile: {user.name}</h1>
      <div>
        <h2>Languages</h2>
        <ul>
          {languages.map(language => (
            <li key={language.id}>
              {language.name} (Level: {language.level})
              <button onClick={() => deleteLanguage(language.id)}>Delete</button>
              <button onClick={() => editLanguage(language)}>Edit</button>
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            placeholder="Language Name"
            value={newLanguage.name}
            onChange={e => setNewLanguage({ ...newLanguage, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Language Level"
            value={newLanguage.level}
            onChange={e => setNewLanguage({ ...newLanguage, level: e.target.value })}
          />
          {selectedLanguage ? (
            <button onClick={updateLanguage}>Update</button>
          ) : (
            <button onClick={addLanguage}>Add Language</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserLanguages;
