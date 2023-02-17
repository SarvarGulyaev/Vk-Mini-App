import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '@vkontakte/vkui/dist/vkui.css';
import { AdaptivityProvider } from '@vkontakte/vkui';
import { ConfigProvider } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';

// Инициализируем VK Mini App
bridge.send('VKWebAppInit')

//bridge
//     .send('VKWebAppInit')
//     .then(data => {
//         // Обработка события в случае успеха
//         console.log('SUCCESS', data);
//     })
//     .catch(error => {
//         console.log('error', error)
//         // Обработка события в случае ошибки
//     });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ConfigProvider>
        <AdaptivityProvider>
            <App />
        </AdaptivityProvider>
    </ConfigProvider>
)
