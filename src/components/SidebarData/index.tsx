import React from 'react';
import {RiArrowDownSFill,RiArrowUpSFill} from 'react-icons/ri'
import {AiFillHome,AiOutlineHeatMap} from 'react-icons/ai'
import {IoIosPaper} from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Início',
        path: '/',
        icon: <AiOutlineHeatMap/>,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
    },
    {
        title: 'Mensagem',
        path: '/mensagem',
        icon: <AiOutlineHeatMap/>,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
    },
    {
        title: 'Conteúdo das Mulas',
        path: '/conteudo',
        icon: <AiOutlineHeatMap/>,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
    },
    {
        title: 'Mulas sem Curral',
        path: '/curral',
        icon: <AiOutlineHeatMap/>,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
    },
    {
        title: 'Se Cuide Mula',
        path: '/secuide',
        icon: <AiOutlineHeatMap/>,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
    },
    {
        title: 'Login',
        path: '/login',
        icon: <AiOutlineHeatMap/>,
        iconClosed: <RiArrowDownSFill />,
        iconOpened: <RiArrowUpSFill />,
    },
]