# JetCo Library

## **Latest Versions**

| **Android (Jetpack Compose)** | **Kotlin Multiplatform (KMP)** |
|---|---|
| <a href="https://search.maven.org/artifact/com.developerstring.jetco/ui/" target="_blank" rel="noopener noreferrer">![Maven Central](https://img.shields.io/maven-central/v/com.developerstring.jetco/ui.svg?label=Maven%20Central)</a> | <a href="https://central.sonatype.com/artifact/com.developerstring.jetco-kmp/ui" target="_blank" rel="noopener noreferrer">![Maven Central KMP](https://img.shields.io/badge/Maven%20Central-1.0.0--beta.8-blue?logo=apache-maven)</a> |

**View the code on GitHub (Open-Source)** 

<a href="https://github.com/DeveloperChunk/JetCo" target="_blank" rel="noopener noreferrer">![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-black?logo=github&logoColor=white)</a>

JetCo is your go-to library for effortlessly adding complex yet elegant UI components into your Android apps and KMP projects. ✨ Forget the headaches of custom implementations — JetCo's got your back with everything from beautiful charts to customizable components, all in just a few lines of code. 💻

---

## **Supported UI Components**

JetCo currently offers a growing lineup of snazzy UI components to make your app stand out:

| 🧁 Component                  | 🍭 Description                                                                                 |
| ----------------------------- | -------------------------------------------------------------------------------------------- |
| **Pie Chart**                 | Slice and dice your data into a tasty pie chart format. 🥧                                   |
| **Column Bar Chart**          | Perfect for showing data as bars with full customization. 📊                                 |
| **Extended Column Bar Chart** | Take your bar charts to the next level with advanced features. 🔥                            |
| **Group Column Bar Chart**    | Compare multiple data sets side by side. 🤓                                                  |
| **TicketCard**                | Custom ticket-style card with cutout arcs, dashed dividers, and flexible slots. 🎟️          |
| **CurvedCard**                | Elegant curved cards with wave animations and customizable backgrounds. 🃏                   |
| **VerticalStepper**           | A vertical timeline/stepper with titles, descriptions, and optional images in each node. ⬇️ |
| **HorizontalStepper**         | A clean and simple horizontal stepper for progress or timeline representation. ➡️           |
| **CompactHorizontalStepper**  | A minimal, icon-only horizontal stepper for compact UIs (great for mobile). ⚡               |

Check out the examples below to see JetCo in action!

<style>
  .image-container {
    flex: 1 1 calc(33.333% - 16px);
    max-width: 300px;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0.2, 0.2, 0.2, 0.2);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 16px;
    background-color: #FAFAFA;
    text-align: center;
  }

  .image-container img {
    width: 100%;
    height: auto;
  }

  .image-container p {
    font-size: 14px;
    color: #555;
    margin: 8px 0;
  }

  .image-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }

  @media (max-width: 768px) {
    .image-container {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
</style>

<div class="image-grid">
  <div class="image-container">
    <img src="https://github.com/developerchunk/JetCo/blob/main/assets/images/1.jpg?raw=true" alt="Pie Chart"/>
    <p>Pie Chart</p>
  </div>
  <div class="image-container">
    <img src="https://github.com/developerchunk/JetCo/blob/main/assets/images/2.jpg?raw=true" alt="Column Bar Chart"/>
    <p>Column Bar Chart</p>
  </div>
  <div class="image-container">
    <img src="https://github.com/developerchunk/JetCo/blob/main/assets/images/3.jpg?raw=true" alt="Extended Column Bar Chart"/>
    <p>Extended Column Bar Chart</p>
  </div>
  <div class="image-container">
    <img src="https://github.com/developerchunk/JetCo/blob/main/assets/images/4.jpg?raw=true" alt="Group Column Bar Chart"/>
    <p>Group Column Bar Chart</p>
  </div>
  <div class="image-container">
    <img src="https://github.com/developerchunk/JetCo/blob/main/assets/images/ticket_card.png?raw=true" alt="TicketCard"/>
    <p>TicketCard</p>
  </div>
  <div class="image-container">
    <img src="https://raw.githubusercontent.com/developerchunk/JetCo/refs/heads/main/assets/images/curvedCard-1.png" alt="CurvedCard"/>
    <p>CurvedCard</p>
  </div>
  <div class="image-container">
    <img src="https://raw.githubusercontent.com/developerchunk/JetCo/refs/heads/main/assets/images/curvedCard-2.gif" alt="CurvedCard Animation"/>
    <p>CurvedCard Animation</p>
  </div>
  <div class="image-container">
    <img src="https://github.com/developerchunk/JetCo/blob/main/assets/images/vertical-stepper.png?raw=true" alt="VerticalStepper"/>
    <p>VerticalStepper</p>
  </div>
  <div class="image-container">
    <img src="https://raw.githubusercontent.com/developerchunk/JetCo/refs/heads/main/assets/images/HorizontalStepper.png" alt="HorizontalStepper"/>
    <p>HorizontalStepper</p>
  </div>
  <div class="image-container">
    <img src="https://raw.githubusercontent.com/developerchunk/JetCo/refs/heads/main/assets/images/CompactHorizontalStepper.png" alt="CompactHorizontalStepper"/>
    <p>CompactHorizontalStepper</p>
  </div>
</div>

---

## **Features**

- 🖌 **Modern UI Components:** Bring your app to life with sleek charts, ticket cards, steppers, and more!
- ⚡️ **Seamless Jetpack Compose Integration:** Say goodbye to compatibility nightmares, JetCo works flawlessly with Jetpack Compose.
- 🛠 **Customization Galore:** Tweak and fine-tune every element to fit your design like a glove. 
- 🚀 **Performance Optimized:** Fast and lightweight, JetCo handles big data with ease (so your app doesn't cry under pressure 🥲).lcome to the **JetCo** library documentation! JetCo is your ultimate **Open-Source** partner for crafting visually stunning, interactive, and efficient UI components in Android apps. 💡 Designed specifically for Jetpack Compose enthusiasts, JetCo is here to make your life easier, your apps prettier, and your users happier. 😊
- 🛠 **Customization Galore:** Tweak and fine-tune every element to fit your design like a glove. 

---

## 🚀 **Getting Started**

Want to get started right away? We've got your back! 🏃‍♂️ Head over to the [Sample](/sample/jetco-ui) section for installation instructions, sample code, and to see how easy it is to integrate JetCo components. You’ll be building gorgeous UIs in no time! ⏱

## 🧭 Need a guide?   
If you prefer more guidance, check out our [Guide](/guide/jetco-ui/jetco-ui) section for tips, tricks, and in-depth customization details.

---

## 😎 **Why Choose JetCo?**

- It's **easy to use**. Seriously, no PhD required! 
- It’s **fast and lightweight**, so your app stays buttery smooth 🧈.
- You get **beautiful, highly customizable components** — your users will thank you. 🙏

No matter if you’re working on a personal project or building the next unicorn 🦄, JetCo gives you the tools to create a jaw-dropping UI.

---

For more details on how to make the most out of JetCo, dive into our [Sample](/sample/jetco-ui) and [Guide](/guide/jetco-ui/jetco-ui) sections.

---

## 🤝 **Contribute to JetCo**

Feel like giving back to the JetCo community? Join us! Check out the [Community](/community) section to see how you can contribute to the library and make it even better. 👩‍💻👨‍💻

---

*Made with ❤️ by the team behind [JetCo](https://github.com/DeveloperChunk/JetCo)*

