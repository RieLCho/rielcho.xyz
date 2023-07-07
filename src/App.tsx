const Header = () => {
  return (
    <header className="w-full h-[100px] text-2xl font-maple-bold bg-bg100">
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
    <body className="bg-bg100">
      main
    </body>
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