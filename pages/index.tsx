import type { NextPage } from 'next'
import '../styles/Main.module.css'
import { CalculatorComponent } from '../components/CalculatorComponent/CalculatorComponent'

const Home: NextPage = () => {
  return (
    <>
      <main>
        <div>
          <h1>
            Welcome to Calculator!
          </h1>
        </div>
        <div>
          {/* result text here */}
        </div>
        <div>
          {/* user input text here */}
        </div>
        <div>
          <CalculatorComponent />
        </div>
      </main>
    </>
  )
}

export default Home
