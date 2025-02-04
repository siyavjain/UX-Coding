let userPersona = {
name: "[Timmy]", // TODO: Replace with a name
age: "[8]", // TODO: Replace with a number
emotions: ["Angry", "Happy", "Sad"], // TODO: Add 3 skills
// # Step 2: Create a method to introduce the persona
introduce: function() {
// TODO: Return a string like "Hi, I'm [name] and I specialize in [skills]"
return "Hi, I'm Timmy and I am currenly feeling angry";
}
};
// # Step 3: Display Persona Details
document.getElementById("persona-name").innerText = userPersona.name;
document.getElementById("persona-age").innerText = userPersona.age;
let skillsList = document.getElementById("persona-emotions"); 
for (let i = 0; i < userPersona.skills.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `- ${userPersona.skills[i]}`;
    skillsList.appendChild(listItem);
}

console.log(userPersona.introduce());
</script>
</body>