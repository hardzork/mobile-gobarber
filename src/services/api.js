import axios from 'axios';
import { Platform } from 'react-native';

const baseURL =
  Platform.OS === 'ios' ? 'http://localhost:3333' : 'http://10.0.3.2:3333';

const api = axios.create({
  baseURL,
});

export default api;
