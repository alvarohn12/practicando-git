import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>logo + Tipado</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      presione aqui
    </p>
    
  </div>
  <form action="">
      <input type="text"><input type="text"><input type="email"><input type="number">
      <textarea name="" id="" cols="30" rows="10"></textarea>
  </form>
  
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

