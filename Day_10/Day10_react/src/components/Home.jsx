function Home({ name, course }){
    return(
        <main style={{ padding: "24px" }}>
            <h1>Hello! {name}</h1>
            <h3>Welcome to {course} subject</h3>
        </main>
    );
}

export default Home;