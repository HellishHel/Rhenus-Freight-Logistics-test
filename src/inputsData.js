import React from 'react';
import imgLocation from './images/location.svg';
import imgCustoms from './images/customs.svg';
import imgFinish from './images/finish.svg';
import imgDate from './images/calendar.svg';
import imgTruck from './images/truck.svg';

export const inputsData = [
    {
        title: 'Адрес места загрузки',
        value: 'Нидерланды (89 кв.)',
        img: imgLocation,
        isRequired: true,
    },
    {
        title: 'Таможня назначения',
        value: 'СВХ Ренус Терминал',
        img: imgCustoms,
    },
    {
        title: 'Адрес места разгрузки',
        value: 'г. Серпухов',
        img: imgFinish,
        isRequired: true,
    },
    {
        title: 'Предполагаемая дата перевозки',
        value: '25.10.2021',
        img: imgDate,
    },
    {
        title: 'Тип кузова',
        value: '90m3',
        img: imgTruck,
        isRequired: true,
        comment: (<p>Объем: <span>до 90 куб.м</span> Грузоподъемность: <span>до 22 тонн</span></p>)
    },
    {
        title: 'Условия поставки',
        value: 'FCA (Free Carrier)',
    },
];