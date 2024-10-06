<script setup>
import { inject } from "@vercel/analytics";
import { ref, reactive, computed, onMounted, provide, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import me from "/public/assets/images/resume/pic.jpeg";

import information from "../components/information.vue";
import skill from "../components/skill/skill.vue";
import introduction from "../components/introduction.vue";
import timeline from "../components/timeline.vue";
import timelineItem from "../components/timeline-Item.vue";
import buttonPortfolio from "../components/buttonPortfolio.vue";
import popup from "../components/popup.vue";
import localeBtn from "../components/localeBtn.vue";

const { locale, t, availableLocales, getLocaleMessage } = useI18n();
const info = ref({});
const field = ref({});
const projects = reactive({});
const currentKey = ref("");
const popupState = ref(false);
const router = useRouter();
const route = useRoute();

inject();

function changeUrlQuery(value) {
  if (!value) {
    router.push({
      path: "/",
      query: null,
      hash: route.hash,
    });
    return;
  }
  router.push({
    path: "/",
    query: { portfolio: value },
    hash: route.hash,
  });
}

function popupSwitch(value, key = null) {
  popupState.value = value;
  switch (value) {
    case true: {
      document.body.style.overflow = "hidden";
      currentKey.value = key;
      break;
    }
    case false: {
      document.body.style.overflow = "auto";
      break;
    }
  }
}

function createData() {
  const localeData = getLocaleMessage(locale.value);

  info.value = localeData.info;
  field.value = localeData.field;
  localeData.portfolio.forEach((x) => {
    const key = x.key;
    projects[key] = x;
  });
}

function pushToDefaultLang() {
  const browserLang = navigator.language || navigator.userLanguage;
  let targetLang = "";
  if (availableLocales.includes(browserLang)) {
    targetLang = browserLang;
  } else {
    targetLang = "en";
  }

  router.push({
    path: "/",
    hash: `#${targetLang}`,
    query: route.query,
  });
}

onMounted(() => {
  document.body.addEventListener("keyup", (e) => {
    if (popupState.value === false) return;
    if (e.key === "Escape") {
      router.push({
        path: "/",
        hash: route.hash,
        query: null,
      });
    }
  });

  watch(
    () => route.query.portfolio,
    (value) => {
      if (value) {
        popupSwitch(true, value);
      } else {
        popupSwitch(false);
      }
    },
    { immediate: true }
  );

  watch(
    () => route.hash,
    (value) => {
      if (value) {
        const lang = value.replace("#", "");
        if (availableLocales.includes(lang)) {
          locale.value = lang;
          createData();
        } else {
          pushToDefaultLang();
        }
      } else {
        pushToDefaultLang();
      }
    },
    { immediate: true }
  );
});

const baseUrl = computed(() => {
  if (process.env.NODE_ENV === "development") return "/public";
  return "";
});

const webUrl = computed(() => {
  if (process.env.NODE_ENV === "development") return "http://localhost:5173";
  return "https://www.jinchengliang.com";
});

const hasLinkItemStyle = computed(() => {
  return "hover:scale-105 transition duration-300 hover:text-white hover:bg-black cursor-pointer";
});

provide("baseUrl", baseUrl);
provide("changeUrlQuery", changeUrlQuery);
</script>

<template>
  <div class="wrap flex flex-col items-center">
    <div class="border relative border-gray-100 shadow-xl wrapInner">
      <localeBtn class="absolute right-5 top-5 md:fixed" />
      <information :data="{ img: me, ...info?.information }" class="mb-10" :email="info?.mail" :linkedin="info?.linkedin" :img="me">
        <template #portfolio>
          <div class="flex gap-2 mt-1">
            <button @click="changeUrlQuery('portfolio')" class="border-2 border-black px-10 origin-center sm:w-full shadow-2xl rounded-2xl bg-black text-white hover:bg-white hover:text-black transition-all duration-300">{{ field?.portfolio }}</button>
            <a v-if="info?.information?.github" target="_blank" :href="info?.information?.github" class="border-2 border-black px-10 origin-center sm:w-full shadow-2xl rounded-2xl hover:bg-black hover:text-white bg-white text-black transition-all duration-300">GitHub</a>
          </div>
        </template>
      </information>
      <introduction class="mb-6" :data="{ title: field?.introduction, content: info?.introduction }" />
      <skill class="mb-10" :data="{ title: field?.skill, content: info?.skill }" />

      <timeline class="mb-10">
        <template #title>{{ field?.experience }}</template>
        <template #content>
          <timelineItem>
            <template #position>Freelance</template>
            <template #company>Side Project</template>
            <template #content>
              <div class="">
                在本職以外，我會將一些覺得有趣的或是想要學習的新技術，以Side Project的方式做成一個專案作品。<br />
                為此增加工程開發上的經驗，同時也會挑戰一些沒使用過的新技術。<br />
                目前針對Socket.io等技術進行研究與實作。<br />
                前端部分則是以React.js為主要框架，後端Socket.io Server是以https方式建立，並且考慮了完善的使用者流程，為其建立了Socket API，以事件來驅動前後端的傳輸。<br />
                並且將其搭配pm2與Nginx部署至AWS EC2空間。<br />
              </div>
              <div class="h-[1px] w-full bg-black my-2"></div>
              <ul class="list-disc text-[15px] pl-5">
                <li @click="changeUrlQuery('socket-draw')" :class="hasLinkItemStyle">Socket功能實作 | 共筆畫版 - <b>功能實現</b> <a href="https://socket-draw.jinchengliang.com/" target="_blank" class="link font-bold">Demo 連結↗</a></li>
                <li @click="changeUrlQuery('socket-chat')" :class="hasLinkItemStyle">Socket功能實作 | 多房間即時聊天通訊 - <b>功能實現</b> <a href="https://socket-chat.jinchengliang.com/" target="_blank" class="link font-bold">Demo 連結↗</a></li>
                <li @click="changeUrlQuery('point_cloud_changer')" :class="hasLinkItemStyle">粒子化3D模型頂點補足器 - <b>演算法實現</b></li>
              </ul>
            </template>
          </timelineItem>
          <timelineItem>
            <template #position>前端工程師</template>
            <template #company>版塊 Block Studio</template>
            <template #time>2023 / 5～2024 / 8</template>
            <template #content>
              <div class="">
                <div>
                  版塊設計是台灣知名的網站專案公司，以炫麗的特效與新穎的互動方式聞名於業界。<br />
                  在任職期間獨立完成數個專案的開發，累積了大量開發經驗。<br />
                  除了前端網站開發以外，我還曾參與了Shopify專案的建置 與Socket.io Server建置。<br />
                  在職期間主要工作內容包括：
                </div>
                <ul class="list-disc text-[15px] pl-10">
                  <li>前端開發： 運用前端框架（Vue.js / React.js）打造高度動態互動的網站，前後經手大小約十個左右專案。其中不乏公司初次嘗試新領域，例如線下展覽互動專案、Shopify電商專案。</li>
                  <li>後端開發： 搭配WordPress CMS系統撰寫PHP的REST API。並且優化公司既有的API加快資料查找速度60%。</li>
                  <li>專案架構： 規劃專案的結構和使用者體驗流程。不斷地優化公司專案的開發模板，提升整體開發使用體驗，刪除用不到的程式碼，並且將資料串接系統整個核心化，大幅提升開發速度。同時建立實用的工作組建提供其他工程師使用。</li>
                  <li>動態特效開發： 使用GSAP、p5.js、WebGL、Matter.js等工具製作動態效果。除了GASP的基礎微動態以外，能夠製作以Canvas/WebGL為主體的大型視覺動態，並將其元件文件化，其他工程師只需更換素材與參數就能夠重現其核心效果。</li>
                  <li>開發文件： 建立公司文件制度與規範，加速整體開發速度30%，並且大幅降低前後端溝通的問題。</li>
                  <li>新人輔導： 帶領兩名新進工程師進入公司專案，並且提供程式上的建議與除錯。</li>
                  <li>專案部署： 能夠使用pm2搭配Nginx部署專案至雲端空間，同時協助撰寫Docker File，使用Docker將專案部署到AWS EC2。調整公司既有的Docker File，解決路由失效的問題。</li>
                  <li>Shopify專案： 公司首個開發Shopify專案工程師，為公司建立後續該類型專案開發流程與開發README，並將其經驗交付給其他工程師，為公司建立新的案源。</li>
                  <li>Socket服務： 公司首個線下體驗展覽負責工程師，該展覽搭配Socket.io來進行活動。獨立規劃完整的程式運作流程，與Socket Server功能撰寫與架設，並且製作API給參與工程師使用。</li>
                  <li>技術探索與分享： 在日常的專案開發外，同時扮演了新技術的測試工具化的角色。在職期間研究了Shopify、WebAR與Socket.io等工具，並且建立適合同仁快速使用的開發工具與技術文件。</li>
                </ul>
              </div>
            </template>
          </timelineItem>
          <timelineItem>
            <template #position>前端工程師／互動工程師</template>
            <template #company>愛迪斯科技 AXIS 3D 專案部 ／Pixelight</template>
            <template #time>2020 / 10～2023 / 2</template>
            <template #content>
              <div class="">
                任職於公司專案部門，開發項目以網頁與互動設計為主，並且成為公司網站相關專案負責人。<br />
                開發了數個網站前端與參與互動設計：<br />
                <ul class="list-disc text-gray-800 text-[15px] pl-10">
                  <li>APP應用、網頁開發</li>
                  <li>制定專案所需的技術</li>
                  <li>體驗流程設計與程式邏輯撰寫、架構規劃</li>
                  <li>專案技術整合</li>
                  <li>專案上線部署、Google Play、APP Store上架</li>
                  <li>新技術研發與應用測試</li>
                  <li>現場專案進場安裝與調校</li>
                  <li>硬體專案研發測試</li>
                </ul>
              </div>
            </template>
          </timelineItem>
          <timelineItem>
            <template #position>互動工程師</template>
            <template #company>玩味創研 Play Design Lab</template>
            <template #time>2020 / 6～2020 / 9</template>
            <template #content>
              <div class="mb-2">
                以Unity為主要開發工具，同時也按需求使用了Arduino與Raspberry Pi等不同的開發工具。<br />
                參與了多項互動開發：
              </div>
              <div class="h-[1px] w-full bg-black my-2"></div>
              <ul class="list-disc text-sm pl-5">
                <li>2020 國立科學工藝博物館 邁向 AIoT 意象牆</li>
                <li @click="changeUrlQuery('ai_shoes_maker')" :class="hasLinkItemStyle">2020 國立科學工藝博物館 AI鞋匠 互動裝置</li>
                <li>2020 昇平戲院 座‧無虛席：昇平戲院 ╳ 臺灣老戲院特展</li>
                <li @click="changeUrlQuery('play_flower')" :class="hasLinkItemStyle">2020 玩花數位VR體驗</li>
                <li>2020 尋常茶VR體驗</li>
              </ul>
            </template>
          </timelineItem>
        </template>
      </timeline>

      <div class="bg-gray-300 my-14 h-[1px] w-full mx-auto" />
      <timeline class="mb-10">
        <template #title>學歷</template>
        <template #content>
          <timelineItem>
            <template #position>學士</template>
            <template #company>南臺科技大學 多媒體與電腦娛樂科學系 / 遊戲工程</template>
            <template #time>2014 / 9～2018 / 6</template>
            <template #content>
              <div class="">
                在系上期間主修遊戲工程開發，使用Unity搭配C#開發過多個小型遊戲專案，在累積程式開分經驗的同時，也累積了不少 團隊合作的技能。 <br />
                畢業專題入圍了國內多個多媒體遊戲 獎項：<br />
                <div class="grid grid-cols-2">
                  <li>放視大賞</li>
                  <li>金點新秀</li>
                  <li>Ａ＋創意季</li>
                  <li>青春設計節</li>
                  <li>互動科技與遊戲設計類「金獎」</li>
                </div>
              </div>
            </template>
          </timelineItem>
        </template>
      </timeline>

      <div class="bg-gray-300 my-14 h-[1.5px] w-3/4 mx-auto" />
      <buttonPortfolio @open="changeUrlQuery('portfolio')" class="mb-5 sm:mb-10" link="https://www.behance.net/JinChengLiang"> 作品集</buttonPortfolio>
    </div>
    <popup :_data="projects" :_key="currentKey" v-if="popupState" />
  </div>
</template>

<style scoped></style>
