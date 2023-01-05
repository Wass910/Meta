import { Dialog } from '@dcl/npc-scene-utils'

export let zombieSpeak: Dialog[] = [
    {
      text: "Hi, I'm john",
    },
    {
      text: 'Can I help You?',
      isQuestion: true,
      buttons: [
        { label: 'Yes', goToDialog: 3 },
        { label: 'No', goToDialog: 2 }
      ]
    },
    {
      text: "Okay, I'll be around if you get curious!",
      isEndOfDialog: true
    },
    {
      text: 'We’re currently in the Natixis space'
    },
    {
      text: 'On the first floor you have the information of the company and the job offer'
    },
    {
      text: 'On the second floor you have the bar and the scene for the event'
    },
    {
      text: "Well that's it from me. So what are you waiting for? Go and explore the world!",
      isEndOfDialog: true
    }
  ]

  export const aliceSpeak: Dialog[] = [
    {
      text: "Hi, I'm Alice - Do you want a drink ?",
      isQuestion: true,
      buttons: [
        { label: 'Yes', goToDialog: 2 },
        { label: 'No', goToDialog: 1 }
      ]
    },
    {
      text: "Okay, don't hesitate if you change your mind",
      isEndOfDialog: true
    },
    {
      text: "Hold on and have a good time",
      isEndOfDialog: true
    }
  ]