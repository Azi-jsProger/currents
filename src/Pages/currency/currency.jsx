import React, { useEffect, useState } from 'react';
import './currency.css';
import { axiosInstance } from '../../utils/api/API';
import { showError, showSucsess } from '../../utils/alert/alert';
import USA from '../../assets/USA.png'
import RUS from '../../assets/russian.webp'
import EUR from '../../assets/europa.png'

const Currency = () => {
    const [currencyData, setCurrencyData] = useState([]);

    const getCurrency = async () => {
        try {
            const response = await axiosInstance.get('/current');
            const filteredCurrent = response.data.filter(item => item.id < 20);
            setCurrencyData(filteredCurrent);
            showSucsess('Успешно', 'Курсы валют загружены');
        } catch (e) {
            showError('Ошибка запроса', 'Повторите попытку позже');
        }
    };

    useEffect(() => {
        getCurrency();
    }, []);

    const formatTime = (dateString) => {
        if (!dateString) return 'Нет данных...';
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className='container-currency'>
            <div className='con-div'>
                <div className='table table-color'>
                    <span>Название</span>
                    <span>№</span>
                    <span><img className='flag' src={USA} />USD</span>
                    <span><img className='flag' src={RUS} />RUB</span>
                    <span><img className='flag' src={EUR} />EUR</span>
                    <span>Время</span>
                </div>
                {currencyData.map((item, idx) => (
                    <div key={idx} className='table'>
                        <span>{item.id}</span>
                        <span>{item.title}</span>
                        <span>{item.rates[0]?.sell_usd ? item.rates[0].sell_usd : 'Нет данных...'} KGS</span>
                        <span>{item.rates[0]?.sell_rub ? item.rates[0].sell_rub : 'Нет данных...'} </span>
                        <span>{item.rates[0]?.sell_eur ? item.rates[0].sell_eur : 'Нет данных...'} </span>
                        <span className='blue-span'>{item.rates[0]?.updated_at ? formatTime(item.rates[0].updated_at) : 'Нет данных...'}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Currency;
