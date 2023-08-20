import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useFilters = () => {
  const { services, colors, occupation } = useSelector(state => state.services);

  const [currentServices, setCurrentServices] = useState(services);
  const [type, setType] = useState(colors[0]);
  const [showTypes, setShowTypes] = useState(false);
  const [currentOcupation, setCurrentOcupation] = useState(occupation[0]);
  const [showOccupation, setShowOccupation] = useState(false);
  const [serchValue, setSearchValue] = useState("");

  useEffect(() => {
    let filtered = services.filter(service => service.occupation.toLowerCase().includes(serchValue) || service.description.toLowerCase().includes(serchValue));
    if (type.color === "gray" && currentOcupation.toLowerCase() === "all") {
      filtered = filtered;
    } else if (type.color === "gray") {
      filtered = filtered.filter(service => service.occupation.includes(currentOcupation));
    } else if (currentOcupation.toLowerCase() === "all") {
      filtered = filtered.filter(service => service.color === type.color);
    } else {
      filtered = filtered.filter(service => service.color === type.color).filter(service => service.occupation.includes(currentOcupation));
    }
    setCurrentServices(filtered);
  }, [type, currentOcupation, serchValue]);

  const handleFilterByType = (choosedType) => {
    setShowTypes(false);
    setType(choosedType);
  };

  const handleByOccupation = (ocpt) => {
    setShowOccupation(false);
    setCurrentOcupation(ocpt);
  };

  return {
    currentServices,
    currentOcupation,
    type,
    showTypes,
    showOccupation,
    serchValue,
    setType,
    setShowTypes,
    setSearchValue,
    setCurrentOcupation,
    handleFilterByType,
    setShowOccupation,
    handleByOccupation
  };
};

export default useFilters;
