import hospital from "../../assets/hospital.jpeg";
import school from "../../assets/school.jpeg";
import administrative from "../../assets/administrative.jpg";
import garden from "../../assets/garden.jpg";
import monumental from "../../assets/monumental.jpg";
import monumental2 from "../../assets/monumental2.jpeg";

export const Buildings = [
  {
    id: "1",
    name: "Escola S. Josina Machel",
    location: "Bairro Albazine A",
    type: "Escola",
    image: school,
  },
  {
    id: "2",
    name: "Edificio Municipal",
    location: "Bairro Central",
    type: "Administrativo",
    image: administrative,
  },
  {
    id: "3",
    name: "Hospital Central de Maputo",
    location: "Bairro do Museu",
    type: "Hospital",
    image: hospital,
  },
  {
    id: "4",
    name: "Jardim dos Professores",
    location: "Bairro do Museu",
    type: "Jardim",
    image: garden,
  },
  {
    id: "5",
    name: "Fortaleza de Maputo",
    location: "Bairro Central",
    type: "Monumento",
    image: monumental,
  },
  {
    id: "6",
    name: "Museu da Mueda",
    location: "Bairro do Museu",
    type: "Monumento",
    image: monumental2,
  },
];
