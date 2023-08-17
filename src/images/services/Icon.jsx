import React from 'react'
import { ComputerIcon, ManIcon, PhoneIcon, ServiceIcon } from './';

const Icon = ({ service }) => {

  return (
    <>
      {service.occupation == "Instructional Design" && <ServiceIcon classname={service.color} />}
      {service.occupation == "Elearning Development" && <ComputerIcon classname={service.color} />}
      {service.occupation == "Mobile Learning" && <PhoneIcon classname={service.color} />}
      {service.occupation == "Instructor-led Training" && <ManIcon classname={service.color} />}
    </>
  )
}

export default Icon
