console.log("Hello world !");

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);



root.render(React.createElement("div", {}, 
    React.createElement("h1", {}, "Mon blog"),
    React.createElement("div", {className: "card"}, 
        React.createElement("h2", {}, "arcticle de blog 1"),
        React.createElement("p", {}, "lorem ipsum")
    )
));
