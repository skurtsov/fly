import React, { useState } from "react";
import BuildingDateComponent from "./building_datecomponent";

const BuildingDate = (props) => {
    const [components, setComponents] = useState([<BuildingDateComponent key={0}/>]); // Используем useState для хранения компонентов

    const urlSearchString = window.location.search;
    const params = new URLSearchParams(urlSearchString);
    const token = params.get('token').slice(0, params.get('token').length - 2);
    const schoolid = 1;

    const addDate = () => {
        console.log('component added');
        const newComponents = [...components, <BuildingDateComponent key={components.length}/>]; // Создаем новый массив компонентов, добавляя новый
        setComponents(newComponents); // Устанавливаем новый массив компонентов в состояние
    }

    return (
        <div className="timebuid_container">
            {components} {/* Отображаем все компоненты */}
            <div className="adddate" onClick={addDate}>+</div>
        </div>
    );
}

export default BuildingDate;
