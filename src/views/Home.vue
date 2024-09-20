<script setup>
import { ref, reactive, computed, onMounted, provide, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import me from "/public/assets/images/resume/pic.jpeg";
import sideData from "/public/assets/side-data.json";
import bsData from "/public/assets/bs-data.json";
import axis3dData from "/public/assets/axis3d-data.json";
import pdlData from "/public/assets/pdl-data.json";
import otherData from "/public/assets/other-data.json";
import info from "../components/info.vue";
import skill from "../components/skill.vue";
import skillCategory from "../components/skill-category.vue";
import skillTable from "../components/skill-Table.vue";
import skillTableItem from "../components/skill-Table-Item.vue";
import introduction from "../components/introduction.vue";
import timeline from "../components/timeline.vue";
import timelineItem from "../components/timeline-Item.vue";
import buttonPortfolio from "../components/buttonPortfolio.vue";
import popup from "../components/popup.vue";

const projects = reactive({});
const currentKey = ref("");
const popupState = ref(false);
// const popupData = reactive({ data });
const router = useRouter();
const route = useRoute();

function changeUrlQuery(value) {
  if (!value) {
    router.push({
      path: "/",
    });
    return;
  }
  router.push({
    path: "/",
    query: { portfolio: value },
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

onMounted(() => {
  document.body.addEventListener("keyup", (e) => {
    if (popupState.value === false) return;
    if (e.key === "Escape") {
      // popupSwitch(false);
      router.push({
        path: "/",
      });
    }
  });

  const data = [...sideData, ...bsData, ...axis3dData, ...pdlData, ...otherData];

  data.forEach((x) => {
    const key = x.key;
    projects[key] = x;
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
});

const baseUrl = computed(() => {
  if (process.env.NODE_ENV === "development") return "/public";
  return "";
});

const hasLinkItemStyle = computed(() => {
  return "hover:scale-105 transition duration-300 hover:text-white hover:bg-black cursor-pointer";
});

provide("baseUrl", baseUrl);
provide("changeUrlQuery", changeUrlQuery);
</script>

<template>
  <div class="wrap flex flex-col items-center">
    <div class="border border-gray-100 shadow-xl wrapInner">
      <info class="mb-10" email="cs2338139@gmail.com" portfolio="https://www.behance.net/JinChengLiang" :img="me">
        <template #name>梁晋誠</template>
        <template #enName>LIANG JIN CHENG</template>
        <template #birthday>1995／12／08</template>
        <template #skill>前端網頁／Unity／VR／互動工程／遊戲開發</template>
        <template #education>南臺科技大學 多媒體與電腦娛樂科學系 / 遊戲工程</template>
        <template #place>臺北，Taiwan</template>
        <template #mail>cs2338139@gmail.com</template>
        <template #phone>0975-601935</template>
        <!-- <template #portfolio>Behance 作品集 ↗</template> -->
      </info>

      <introduction class="mb-10">
        <template #title>個人簡述</template>
        <template #content>
          擁有4年軟體開發經驗的軟體工程師，專注於前端開發和互動設計。<br />
          參與了數個專案的開發，大多以網站前端開發為主，但也有APP、VR/AR，線下展覽互動裝置開發的經驗。<br />
          擅長前後端分離架構的開發，並能夠使用Docker進行專案部署。在版塊設計期間，從無到有，參與了多個高度互動的網站專案，除了切版工作外，更專注於複雜的JavaScript以實現豐富的動態效果與功能實踐。<br />
          曾主導基於Socket的大型互動展覽項目，負責整體架構設計和核心功能實現。<br />
          此外，也具有Shopify電商平台的開發經驗。<br />
          隨著經驗的積累，正逐步向產品開發方向發展，致力於創造更具影響力的數位體驗。<br />
        </template>
      </introduction>

      <skill class="mb-10">
        <template #title>技能</template>
        <template #content>
          <skillCategory>
            <template #title> Web</template>
            <template #content>
              <skillTable>
                <template #title>基礎技能</template>
                <template #content>
                  <skillTableItem>React.js</skillTableItem>
                  <skillTableItem>Vue.js (Nuxt.js)</skillTableItem>
                  <skillTableItem>HTML5／CSS／javascript</skillTableItem>
                  <skillTableItem>RWD 響應式網頁規劃</skillTableItem>
                  <skillTableItem>Tailwind</skillTableItem>
                  <skillTableItem>PHP</skillTableItem>
                  <skillTableItem>C#</skillTableItem>
                </template>
              </skillTable>
              <skillTable>
                <template #title>工具</template>
                <template #content>
                  <skillTableItem>Socket.io</skillTableItem>
                  <skillTableItem>GSAP／ScrollTrigger</skillTableItem>
                  <skillTableItem>Canvas／WebGL</skillTableItem>
                  <skillTableItem>i18n</skillTableItem>
                  <skillTableItem>three.js</skillTableItem>
                  <skillTableItem>Liquid</skillTableItem>
                  <skillTableItem>P5.js</skillTableItem>
                  <skillTableItem>Matter.js</skillTableItem>
                  <skillTableItem>Swiper.js</skillTableItem>
                  <skillTableItem>Keen Slider.js</skillTableItem>
                </template>
              </skillTable>
              <skillTable>
                <template #title>其他</template>
                <template #content>
                  <skillTableItem>WordPress CMS</skillTableItem>
                  <skillTableItem>Shopify</skillTableItem>
                </template>
              </skillTable>
            </template>
          </skillCategory>

          <skillCategory>
            <template #title>其他</template>
            <template #content>
              <skillTable>
                <template #title>互動／新媒體</template>
                <template #content>
                  <skillTableItem>Unity／C＃</skillTableItem>
                  <skillTableItem>VR (HTC Vive／Oculus／Google CardBoard)</skillTableItem>
                  <skillTableItem>AR (AR Foundation／AR Kit／AR Core)</skillTableItem>
                  <skillTableItem>Arduino</skillTableItem>
                  <skillTableItem>Kinect／Azure Kinect</skillTableItem>
                  <skillTableItem>Radar sensor</skillTableItem>
                </template>
              </skillTable>
              <skillTable>
                <template #title>其他</template>
                <template #content>
                  <skillTableItem>Git</skillTableItem>
                  <skillTableItem>AWS EC2 部署</skillTableItem>
                  <skillTableItem>Docker</skillTableItem>
                </template>
              </skillTable>
            </template>
          </skillCategory>
        </template>
      </skill>

      <timeline class="mb-10">
        <template #title>工作經歷</template>
        <template #content>
          <timelineItem>
            <template #position>Side Project</template>
            <template #company>自由接案</template>
            <template #content>
              <div class="">
                在本職以外，我也會有將一些覺得有趣的或是想要學習的新技術，以Side Project的方式做成一個專案作品。<br />
                為此增加工程開發上的經驗，或是挑戰一些沒使用過的新技術。
              </div>
              <div class="h-[1px] w-full bg-black my-2"></div>
              <ul class="list-disc text-sm pl-5">
                <li @click="changeUrlQuery('socket-draw')" :class="hasLinkItemStyle">Socket功能實作 | 共筆畫版 - <b>功能實現</b></li>
                <li @click="changeUrlQuery('socket-chat')" :class="hasLinkItemStyle">Socket功能實作 | 多房間即時聊天通訊 - <b>功能實現</b></li>
                <li @click="changeUrlQuery('vibe-400')" :class="hasLinkItemStyle">VIBE-400 - <b>網站開發</b></li>
                <li @click="changeUrlQuery('point_cloud_changer')" :class="hasLinkItemStyle">粒子化3D模型頂點補足器 - <b>演算法實現</b></li>
              </ul>
            </template>
          </timelineItem>
          <timelineItem>
            <template #position>前端工程師</template>
            <template #company>版塊設計 Block Studio</template>
            <template #time>2023 / 5～2024 / 8</template>
            <template #content>
              <div class="">
                版塊設計是台灣知名的網站設計公司，以炫麗的特效與新穎的互動方式聞名於業界。<br />
                在任職期間獨立完成數個專案的開發，累積了大量開發經驗。<br />
                除了前端網站開發以外，我還曾參與了Shopify專案的建置 與Socket.io Server建置。<br />
                在職期間主要工作內容包括：<br />
                <ul class="list-disc text-gray-800 text-[15px] pl-10">
                  <li>前端開發： 打造高度動態互動的網站，並且串接後端資料。</li>
                  <li>後端開發： 撰寫PHP的REST API。</li>
                  <li>Shopify專案： 建立Shopify主題，並且為其客製樣式組件，同時協助客戶部署上線。</li>
                  <li>Socket服務： 規劃基於Socket的即時通訊體驗流程，並且實作其程式前後端邏輯。</li>
                  <li>專案架構： 規劃專案的結構和使用者體驗流程。</li>
                  <li>動態特效開發： 使用GSAP、p5.js、WebGL、Matter.js等工具製作動態效果。</li>
                  <li>開發文件： 撰寫詳細的開發和技術文件。</li>
                  <li>新人輔導： 協助和指導新進的開發人員，帶領他們進入公司專案，並且提供程式上的建議與除錯。</li>
                  <li>專案部署： 協助撰寫Docker File，使用Docker將專案部署到AWS EC2。</li>
                  <li>技術探索與分享： 在工程部門裡面，我的職位不只於專案開發，同時也扮演了新技術的測試工具化的角色。我在職期間研究了Shopify、WebAR與Socket.io等工具，並且建立適合同仁快速使用的開發工具與技術文件。</li>
                </ul>
              </div>
              <div class="h-[1px] w-full bg-black my-2"></div>
              <ul class="list-disc text-sm pl-5">
                <li @click="changeUrlQuery('cmp-inspiration')" :class="hasLinkItemStyle">2024 勤美術館 官方網站 - <b>網站開發 ＆ 後台建置 Api開發</b></li>
                <li @click="changeUrlQuery('sasugas')" :class="hasLinkItemStyle">2024 流石五金官方網站 官方網站 - <b>網站開發</b></li>
                <li @click="changeUrlQuery('venti-venti')" :class="hasLinkItemStyle">2024 幫推行銷 官方網站 - <b>網站開發</b></li>
                <li>2024 投石行銷 官方網站 - <b>後台建置 Api開發</b></li>
                <li @click="changeUrlQuery('sunmai')" :class="hasLinkItemStyle">2024 金色三麥 官方網站 - <b>網站開發</b></li>
                <li @click="changeUrlQuery('nci_studio')" :class="hasLinkItemStyle">2023 Shopify 商店 NCI STUDIOS - <b>前端主題開發</b> <a href="https://tinyurl.com/n2k9v24z" target="_blank" class="link font-bold">網站連結↗</a></li>
                <li @click="changeUrlQuery('organno')" :class="hasLinkItemStyle">2023 Organon-hhf - <b>網站開發</b></li>
                <li @click="changeUrlQuery('wenk')" to-do :class="hasLinkItemStyle">2023 維肯媒體 WENK MEDIA - <b>網站開發</b> <a href="https://tinyurl.com/y2zn5teu" target="_blank" class="link font-bold">網站連結↗</a></li>
                <li @click="changeUrlQuery('exhibition-socket')" :class="hasLinkItemStyle">2023 臺中州廳 城中串遊展覽 - <b>Socket Client & Sever</b></li>
                <li @click="changeUrlQuery('exhibition-image')" :class="hasLinkItemStyle">2023 臺中州廳 城中串遊展覽 意識樣貌 - <b>網站開發</b></li>
                <li @click="changeUrlQuery('vacation')" :class="hasLinkItemStyle">2023 假期農場 - <b>第二期開發與後台建制、資料串接</b> <a href="https://tinyurl.com/329h65c5" target="_blank" class="link font-bold">網站連結↗</a></li>
                <li @click="changeUrlQuery('desider71')" :class="hasLinkItemStyle">2023 Shopify 商店 Desidere 7.1 - <b>前端主題開發</b> <a href="https://tinyurl.com/4h5fhvuj" target="_blank" class="link font-bold">網站連結↗</a></li>
                <li @click="changeUrlQuery('block_studio')" :class="hasLinkItemStyle">2023 板塊設計 官方網站 - <b>Socket Client & Sever、動態開發</b> <a href="https://tinyurl.com/ym8mc56k" target="_blank" class="link font-bold">網站連結↗</a></li>
                <li @click="changeUrlQuery('kkbox')" :class="hasLinkItemStyle">2023 KKBOX風雲榜 線上互動遊戲 - <b>網站開發</b></li>
              </ul>
            </template>
          </timelineItem>
          <timelineItem>
            <template #position>前端工程師／互動工程師</template>
            <template #company>愛迪斯科技 專案部 ／Pixelight</template>
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
              <div class="h-[1px] w-full bg-black my-2"></div>
              <ul class="list-disc text-sm pl-5">
                <li>2022 國立臺灣文學館 文學館古蹟AR導覽</li>
                <li @click="changeUrlQuery('ws_new')" :class="hasLinkItemStyle">2022 國立臺灣文學館 數位遊戲開發暨藏品3D掃描建模計畫 網站 （新版）</li>
                <li @click="changeUrlQuery('ae_web')" :class="hasLinkItemStyle">2022 國立臺灣藝術教育館 夢境漫遊：繪本藝術展 網站</li>
                <li @click="changeUrlQuery('ws_build')" :class="hasLinkItemStyle">2022 國立臺灣文學館 文學館古蹟導覽下載 網站</li>
                <li @click="changeUrlQuery('ws_tailor')" :class="hasLinkItemStyle">2022 國立臺灣文學館 光影裁縫店：冷不防 兒童繪本互動劇場</li>
                <li @click="changeUrlQuery('ws_old')" :class="hasLinkItemStyle">2021 國立臺灣文學館 數位遊戲開發暨藏品3D掃描建模計畫 網站 （初版）</li>
                <li @click="changeUrlQuery('ws_ar_ele')" :class="hasLinkItemStyle">2021 國立臺灣文學館 摺紙像偶AR 互動AR遊戲</li>
                <li>2021 桃園安麗空間 賦能區 互動體感裝置</li>
                <li>2021 桃園安麗空間 紐崔萊全程追朔 顯微鏡機構互動裝置</li>
                <li>2021 桃園安麗空間 E-Spring 互動投影展示裝置</li>
                <li @click="changeUrlQuery('ws_island')" :class="hasLinkItemStyle">2020 國立臺灣文學館 夢獸之島 多平台VR遊戲</li>
                <li @click="changeUrlQuery('little_son')" :class="hasLinkItemStyle">2020 小兒子AR大冒險 互動AR遊戲APP</li>
              </ul>
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
          <timelineItem>
            <template #position>程式負責人</template>
            <template #company>STEAMNANO</template>
            <template #time>2017 / 9～2018 / 4</template>
            <template #content>
              <div class="mb-2">入圍2018 青春設計節、放視大賞、金點新秀、Ａ＋創意季，並且獲得青春設計節-互動科技與遊戲設計類「金獎」。</div>
              <div class="h-[1px] w-full bg-black my-2"></div>
              <ul class="list-disc text-sm pl-5">
                <li @click="changeUrlQuery('steam_nano')" :class="hasLinkItemStyle">2018 STEAMNANO 數位遊戲</li>
              </ul>
            </template>
          </timelineItem>
          <timelineItem>
            <template #position>程式負責人</template>
            <template #company>LOVEGOD!</template>
            <template #time>2017 / 2～2017 / 6</template>
          </timelineItem>
          <timelineItem>
            <template #position>程式負責人</template>
            <template #company>GODOG</template>
            <template #time>2016 / 9～2017 / 1</template>
            <template #content>
              <ul class="list-disc text-sm pl-5">
                <li @click="changeUrlQuery('godog')" :class="hasLinkItemStyle">2016 GODOG 數位遊戲</li>
              </ul>
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
