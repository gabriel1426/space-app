export interface IPlanet {
  id: number;
  image: string;
  name: string;
  description: string;
  color: string;
  curiosidades: { curiosity: string }[];
  gravedad: string;
  isActivated?: boolean;
  index?: number;
}
