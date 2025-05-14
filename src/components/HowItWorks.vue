<template>
  <section class="work">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="block-text center">
            <h3 class="heading">How It Work</h3>
            <p class="fs-20 desc">
              Stacks is a production-ready library of stackable content blocks built in React
              Native.
            </p>
          </div>

          <div class="work__main">
            <div v-for="(step, index) in workSteps" :key="index" class="work-box">
              <div class="image">
                <!-- <img :src="require(`@/assets/images/icon/${step.icon}.png`)" alt="" /> -->
              </div>
              <div class="content">
                <p class="step">Step {{ index + 1 }}</p>
                <a href="#" class="title">{{ step.title }}</a>
                <p class="text">
                  {{ step.description }}
                </p>
              </div>
              <!-- <img
                v-if="index < workSteps.length - 1"
                class="line"
                src="@/assets/images/icon/connect-line.png"
                alt=""
              /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWorks',
  setup() {
    const workSteps = [
      {
        icon: 'Cloud',
        title: 'Download',
        description:
          'Stacks is a production-ready library of stackable content blocks built in React Native.',
      },
      {
        icon: 'Wallet',
        title: 'Connect wallet',
        description:
          'Stacks is a production-ready library of stackable content blocks built in React Native.',
      },
      {
        icon: 'Mining',
        title: 'Start trading',
        description:
          'Stacks is a production-ready library of stackable content blocks built in React Native.',
      },
      {
        icon: 'Comparison',
        title: 'Earn money',
        description:
          'Stacks is a production-ready library of stackable content blocks built in React Native.',
      },
    ]

    return {
      workSteps,
    }
  },
}
</script>