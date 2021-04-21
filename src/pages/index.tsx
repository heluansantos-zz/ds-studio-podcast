import { Header } from "../components/Header";
import {useEffect} from 'react';

export default function Home() {
  useEffect(()=> {
    fetch('http://localhost:3333/episodies')
    .then(response => response.json())
    .then(data=> console.log(data))
  },[]);
  return (
    <div>
      <p>Heloo</p>
    </div>
  )
}
