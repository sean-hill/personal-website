# JavaScript Clean Coding Best Practices

When it comes to development, there is good programming and then there is great programming. Good programming functions and works, great programming is maintanable and clean. We all know that even bad code works, but it takes time and resources to make a program great.

### Characteristics of Clean code

1. It should be elegant and pleasing to read. Reading source code should make you smile the way a well-crafted music box or a well-designed car would.
2. Clean code is focused. Each function, each class, each module exposes a single-minded attitude that remains entirely undistracted, and unpolluted, by the surrounding details.
3. Clean code is taken care of. Someone has taken the time to keep it simple and orderly. They have paid appropriate attention to details. They have cared.
4. Minimize the number of entities such as classes, methods, functions, and the like.
5. Contains no duplication

### Code Duplication

My favorite place to utilize clean code principles is by removing code duplication. Do your absolute best to avoid duplicate code. Duplicate code is bad because it means that there's more than one place to alter something if you need to change some logic.

Imagine if you run a restaurant and you keep track of your inventory: all your tomatoes, onions, garlic, spices, etc. If you have multiple lists that you keep this on, then all have to be updated when you serve a dish with tomatoes in them. If you only have one list, there's only one place to update!

Oftentimes you have duplicate code because you have two or more slightly different things, that share a lot in common, but their differences force you to have two or more separate functions that do much of the same things. Removing duplicate code means creating an abstraction that can handle this set of different things with just one function/module/class.

**Bad example**

```js
function showDeveloperList(developers) {
  developers.forEach(developer => {
    const expectedSalary = developer.calculateExpectedSalary()
    const experience = developer.getExperience()
    const githubLink = developer.getGithubLink()
    const data = {
      expectedSalary,
      experience,
      githubLink
    }

    render(data)
  })
}

function showManagerList(managers) {
  managers.forEach(manager => {
    const expectedSalary = manager.calculateExpectedSalary()
    const experience = manager.getExperience()
    const portfolio = manager.getMBAProjects()
    const data = {
      expectedSalary,
      experience,
      portfolio
    }

    render(data)
  })
}
```

**Good example**

```js
function showEmployeeList(employees) {
  employees.forEach(employee => {
    const expectedSalary = employee.calculateExpectedSalary()
    const experience = employee.getExperience()

    const data = {
      expectedSalary,
      experience
    }

    switch (employee.type) {
      case 'manager':
        data.portfolio = employee.getMBAProjects()
        break
      case 'developer':
        data.githubLink = employee.getGithubLink()
        break
    }

    render(data)
  })
}
```

Every piece of code starts as a first draft, like wet clay getting shaped into its final form. Finally, we chisel away the imperfections when we review it with our peers. Don't beat yourself up for first drafts that need improvement. Beat up the code instead! Writting clean code will make you a better developer, and a better programming friend :)
