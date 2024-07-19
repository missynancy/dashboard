import axios from 'axios';

const baseUrl = 'http://localhost:3031/attendance'; // Adjust the URL if needed

const getDailyAttendance = async (date) => {
  try {
    const response = await axios.get(`${baseUrl}?date=${date}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching daily attendance data:', error);
    throw error;
  }
};

const attendanceService = {
  getDailyAttendance,
};

export default attendanceService;
