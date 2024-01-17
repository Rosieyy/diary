import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import axios from 'axios';
import {
  Container, 
  styled
} from '@mui/material'
import { Weather, Visibility, DiaryEntry } from './types'
import CustomizedDialogs from './components/diaries'
import AddDiaryDialog from './components/AddEntry';

const CenteredContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // 100% of the viewport height
});

const App = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  const [newDate, setNewDate] = useState('');
  const [newWeather, setNewWeather] = useState(Weather.Sunny);
  const [newVisibility, setNewVisibility] = useState(Visibility.Good);
  const [newComment, setNewComment] = useState('');

  const handleDate = (event:React.SyntheticEvent) => {
    setNewDate(event.target.value)
  }

  const handleWeather = (event:React.SyntheticEvent) => {
    setNewWeather(event.target.value)
  }

  const handleVisibility = (event:React.SyntheticEvent) => {
    setNewVisibility(event.target.value)
  }

  const handleComment = (event:React.SyntheticEvent) => {
    setNewComment(event.target.value)
  }

  const addDiary = (event:React.SyntheticEvent) => {
    event.preventDefault()
    const diaryObject = {
      date: newDate,
      weather: newWeather,
      visibility: newVisibility,
      comment: newComment,
      id: diaries.length + 1

    }
    // setDiaries(diaries.concat(diaryObject))
    axios.post('http://localhost:3000/api/diaries',diaryObject).then(
      response => {
        setDiaries(diaries.concat(response.data))
        setNewDate('')
        setNewComment('')
      }
    )
  }

  useEffect(() => {
    const fetchDiaries = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/diaries');
        setDiaries(response.data);
      } catch (error) {
        console.error('Error fetching diaries:', error);
      }
    };

    fetchDiaries();
  }, []);

  return (
    <CenteredContainer maxWidth="sm" >
      <AddDiaryDialog
      addDiary={addDiary}
      handleDate={handleDate}
      newDate={newDate}
      handleWeather={handleWeather}
      handleVisibility={handleVisibility}
      handleComment={handleComment}
      newWeather={newWeather}
      newVisibility={newVisibility}
      newComment={newComment}
    />
    <br />
      <CustomizedDialogs diaries={diaries} />
    </CenteredContainer>
    
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
);

