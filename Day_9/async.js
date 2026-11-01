// A Promise that resolves or rejects after a delay
function checkMarks(marks) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 40) resolve(`Pass with ${marks}`);
      else reject(new Error(`Fail with ${marks}`));
    }, 500);
  });
}

// .then / .catch
checkMarks(75)
  .then((result) => console.log("then:", result))
  .catch((err) => console.log("catch:", err.message));

// async / await
async function run() {
  try {
    console.log(await checkMarks(80));
    console.log(await checkMarks(20));       // rejects, goes to catch
  } catch (err) {
    console.log("Error:", err.message);
  } finally {
    console.log("Done");
  }
}
run();

// Promise.all: run requests together
async function fetchData() {
  try {
    const [usersRes, postsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts")
    ]);
    const users = await usersRes.json();
    const posts = await postsRes.json();
    console.log(`Users: ${users.length}, Posts: ${posts.length}`);
    console.log("First user:", users[0].name);
  } catch (err) {
    console.log("Fetch failed:", err.message);
  }
}
fetchData();

// Order of execution
console.log("1. Start");
setTimeout(() => console.log("3. Timeout"), 0);
console.log("2. End");
// Output: Start, End, Timeout (async code runs after the normal code)