import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Log {
  id: number;
  date: string;
  message: string;
}

const LogViewer: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    axios.get('URL_DEL_BACKEND/logs')
      .then(response => setLogs(response.data))
      .catch(error => console.error('Error fetching logs:', error));
  }, []);

  return (
    <div>
      <h2>Logs Almacenados</h2>
      <ul>
        {logs.map(log => (
          <li key={log.id}>
            <strong>{log.date}</strong>: {log.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogViewer;
