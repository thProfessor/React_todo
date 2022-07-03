const Layout = ({children}) => {
    return(
       <div className="grid md:grid-cols-2 grid-cols-1 min-h-screen bg-green-900 p-5 gap-10">{children}</div>
    )
}
export default Layout;