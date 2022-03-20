<template>
  <aside class="flex-center space-x-2 md:space-x-4">
    <a
      :href="$static.metadata.blog"
      target="_blank"
      rel="noopener noreferrer"
      title="Blog"
    >
      <DevToIcon class="icon-md md:icon-lg" />
    </a>
    <a
      :href="$static.metadata.github"
      target="_blank"
      rel="noopener noreferrer"
      title="Github"
    >
      <GithubIcon class="icon-md md:icon-lg" />
    </a>
    <a
      :href="$static.metadata.linkedin"
      target="_blank"
      rel="noopener noreferrer"
      title="LinkeIn"
    >
      <LinkedinIcon class="icon-md md:icon-lg" />
    </a>
    <a
      :href="$static.metadata.twitter"
      target="_blank"
      rel="noopener noreferrer"
      title="Twitter"
    >
      <TwitterIcon class="icon-md md:icon-lg" />
    </a>
    <a
      :href="$static.metadata.journal"
      target="_blank"
      rel="noopener noreferrer"
      title="Journal"
    >
      <WordpressIcon class="icon-md md:icon-lg" />
    </a>
    <a
      :href="$static.metadata.telegram"
      target="_blank"
      rel="noopener noreferrer"
      title="Telegram"
    >
      <MessageIcon class="icon-md md:icon-lg" />
    </a>
  </aside>
</template>

<static-query>
query {
  metadata {
    blog
    github
    linkedin
    twitter
    journal
    telegram
  }
}
</static-query>

<script>
import GithubIcon from "vue-material-design-icons/Github"
import LinkedinIcon from "vue-material-design-icons/Linkedin"
import TwitterIcon from "vue-material-design-icons/Twitter"
import WordpressIcon from "vue-material-design-icons/Wordpress"
import DevToIcon from "vue-material-design-icons/DevTo"
import MessageIcon from "vue-material-design-icons/MessageText"

export default {
  components: {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    WordpressIcon,
    DevToIcon,
    MessageIcon,
  },
}
</script>
