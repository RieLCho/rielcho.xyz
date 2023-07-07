const Header = () => {
  return (
    <header className="w-full h-[100px] text-2xl font-maple-bold">
      <div className="flex">
        <span>
          @RieL_Cho
        </span>
      </div>
    </header>
  )
}

const Footer = () => {
  return (
    <footer>
      foot
    </footer>
  )
}

const Main = () => {
  return (
    <div>
      main
    </div>
  )
}

const App = () => {
  return (
    <>
    <Header />
    <Main />
    <Footer />
    </>
  )
}

export default App;