<script setup>
import info from "../components/info.vue";
import skill from "../components/skill.vue";
import skillCategory from "../components/skill-category.vue";
import skillTable from "../components/skill-Table.vue";
import skillTableItem from "../components/skill-Table-Item.vue";
import introduction from "../components/introduction.vue";
import timeline from "../components/timeline.vue";
import timelineItem from "../components/timeline-Item.vue";
import portfolio from "../components/portfolio.vue";
import me from "/public/pic.jpeg";
</script>

<template>
  <div class="wrap flex flex-col items-center">
    <div class="border border-gray-100 shadow-xl wrapInner">
      <info class="mb-10" email="cs2338139@gmail.com" portfolio="https://www.behance.net/JinChengLiang" :img="me">
        <template #name>梁晋誠</template>
        <template #enName>LIANG JIN CHENG</template>
        <template #birthday>1995／12／08</template>
        <template #skill>前端網頁／Unity／VR／互動工程／遊戲開發</template>
        <template #education>南臺科技大學 多媒體與電腦娛樂科學系</template>
        <template #place>臺北，Taiwan</template>
        <template #mail>cs2338139@gmail.com</template>
        <template #phone>0975-601935</template>
        <template #portfolio>Behance 作品集 ↗</template>
      </info>

      <introduction class="mb-10">
        <template #title>個人簡述</template>
        <template #content>
          <!-- 曾作為工程師任職於互動設計公司，執行了多項互動設計相關的開發專案。<br />
          我能夠善用各種不同的開發工具來達到專案的目的，而隨著自己的職涯規劃，也慢慢地從互動設計轉往網頁前端。在一次專案的需求下，我以自學的方式踏入了前端網頁的領域，同時也成為公司的網站開發案的負責人，獨立完成了數個網頁開發的專案。<br />
          相比過去開發的互動App或是現場的互動機構裝置，我更喜歡網站的形式，它不用讓使用者特地去安裝App或是到現場才能觀看，只需要瀏覽器和網路就能夠將資訊與畫面傳遞給使用者，大大的推廣了作品的傳遞幅度，這樣的便捷讓我深深的著迷。<br />
          在一頭栽入前端領域後，我養成了定期上Awwwards、The FWA等前端作品網站的習慣，在欣賞國內外厲害的作品的同時，也嘗試去解析他們可能使用的工具和達成效果的方式，講它們化為自己的記憶庫。<br/> -->
          有多年的軟體開發經歷，曾作為工程師任職於互動設計公司，執行了多項網頁與互動設計相關的開發專案，隨著職涯規劃，開始以網頁開發為主要項目。<br />
          我能夠善用各種不同的開發工具來達到專案的目的，喜歡嘗試不同的新東西，會研究沒有使用過的開發工具，或是不同的程式撰寫方法，來達到更有效的開發。<br />
          在閒暇之餘也會翻開曾經執行過的專案，重新檢視程式碼，思考著要如何以更好更有效的方式來撰寫，重新審視是當時的邏輯是否有不通順的地方，確保自己能夠不斷的進步。<br />
          同時也會把它們有趣的部分獨立出來嘗試做成一個獨立的side project。<br />
        </template>
      </introduction>

      <skill class="mb-10">
        <template #title>技能</template>
        <template #content>
          <skillCategory>
            <template #title> 前端網頁</template>
            <template #content>
              <skillTable>
                <template #title>基礎技能</template>
                <template #content>
                  <skillTableItem>HTML5</skillTableItem>
                  <skillTableItem>CSS</skillTableItem>
                  <skillTableItem>javascript／Tailwind</skillTableItem>
                  <skillTableItem>RWD 響應式網頁規劃</skillTableItem>
                </template>
              </skillTable>
              <skillTable>
                <template #title>框架與工具</template>
                <template #content>
                  <skillTableItem>Vue 3</skillTableItem>
                  <skillTableItem>Nuxt 3</skillTableItem>
                  <skillTableItem>Vue Router</skillTableItem>
                  <skillTableItem>Tailwind</skillTableItem>
                  <skillTableItem>GraphQL</skillTableItem>
                  <skillTableItem>GSAP</skillTableItem>
                  <skillTableItem>i18n</skillTableItem>
                  <skillTableItem>three.js</skillTableItem>
                  <skillTableItem>Axios</skillTableItem>
                </template>
              </skillTable>
              <skillTable>
                <template #title>其他</template>
                <template #content>
                  <skillTableItem>Vite</skillTableItem>
                  <skillTableItem>WordPress（作爲CMS，使用GraphQL與前端串接）</skillTableItem>
                </template>
              </skillTable>
            </template>
          </skillCategory>

          <skillCategory>
            <template #title>其他</template>
            <template #content>
              <skillTable>
                <template #title>互動設計</template>
                <template #content>
                  <skillTableItem>Unity／C＃</skillTableItem>
                  <skillTableItem>VR (HTC Vive／Oculus／Google CardBoard)</skillTableItem>
                  <skillTableItem>AR (AR Foundation／AR Kit／AR Core)</skillTableItem>
                  <!-- <skillTableItem>Processing</skillTableItem> -->
                  <skillTableItem>Arduino</skillTableItem>
                  <skillTableItem>Kinect／Azure Kinect</skillTableItem>
                  <skillTableItem>Radar sensor</skillTableItem>
                  <skillTableItem>多畫面融接投影</skillTableItem>
                </template>
              </skillTable>
              <skillTable>
                <template #title>其他</template>
                <template #content>
                  <skillTableItem>Git／GitHub</skillTableItem>
                  <skillTableItem>Json</skillTableItem>
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
            <template #position>前端工程師／互動工程師</template>
            <template #company>Pixelight.（愛迪斯科技 專案部）</template>
            <template #time>2020 / 10～2023 / 2</template>
            <template #content>
              任職於公司專案部門，開發項目以網頁與互動設計為主，並且成為公司網站相關專案負責人。<br />
              開發了數個網站前端與參與互動設計：<br />
              <ul class="list-disc text-sm pl-5">
                <li>2022 VIBE 400 網站<a href="project.vibe400.jinchengstudio.com" target="_blank" class="link font-bold ">網站連結↗</a></li>
                <li>2022 國立臺灣文學館 數位遊戲開發暨藏品3D掃描建模計畫 網站 （新版）<a href="https://project.ws.jinchengstudio.com/" target="_blank" class="link font-bold ">網站連結↗</a></li>
                <li>2022 國立臺灣藝術教育館 夢境漫遊：繪本藝術展 網站）<a href="https://picturebookart.com.tw/" target="_blank" class="link font-bold ">網站連結↗</a></li>
                <li>2022 國立臺灣文學館 文學館古蹟導覽下載 網站</li>
                <li>2022 國立臺灣文學館 光影裁縫店：冷不防 兒童繪本互動劇場</li>
                <li>2021 國立臺灣文學館 數位遊戲開發暨藏品3D掃描建模計畫 網站 （初版）</li>
                <li>2021 桃園安麗空間 賦能區 互動體感裝置</li>
                <li>2021 桃園安麗空間 紐崔萊全程追朔 顯微鏡機構互動裝置</li>
                <li>2021 桃園安麗空間 E-Spring 互動投影展示裝置</li>
              </ul>
              <div class="font-bold mt-1 text-lg"><a href="https://www.behance.net/JinChengLiang" target="_blank" class="link">更多作品連結 ↗</a></div>
            </template>
          </timelineItem>
          <timelineItem>
            <template #position>互動工程師</template>
            <template #company>玩味創研 Play Design Lab</template>
            <template #time>2020 / 6～202 / 9</template>
            <template #content
              >以Unity為主要開發工具，同時也按需求使用了Arduino與Raspberry Pi等不同的開發工具。<br />
              參與了多項互動開發：<br />
              <ul class="list-disc text-sm pl-5">
                <li>2020 國立科學工藝博物館－邁向 AIoT 意象牆</li>
                <li>2020 國立科學工藝博物館－AI鞋匠</li>
                <li>2020 昇平戲院 座‧無虛席：昇平戲院 ╳ 臺灣老戲院特展</li>
                <li>2020 玩花數位VR體驗</li>
                <li>2020 尋常茶VR體驗</li>
              </ul>
            </template>
          </timelineItem>
          <timelineItem>
            <template #position>Unity程式人員</template>
            <template #company>STEAMNANO</template>
            <template #time>2017 / 9～2018 / 4</template>
            <template #content>入圍2018 青春設計節、放視大賞、金點新秀、Ａ＋創意季，並且獲得青春設計節-互動科技與遊戲設計類「金獎」。</template>
          </timelineItem>
          <timelineItem>
            <template #position>Unity程式人員</template>
            <template #company>LOVEGOD!</template>
            <template #time>2017 / 2～2017 / 6</template>
          </timelineItem>
          <timelineItem>
            <template #position>Unity程式人員</template>
            <template #company>GODOG</template>
            <template #time>2016 / 9～2017 / 1</template>
          </timelineItem>
        </template>
      </timeline>
      <div class="bg-gray-300 my-14 h-[1.5px] w-3/4 mx-auto" />
      <portfolio class="mb-5 sm:mb-10" link="https://www.behance.net/JinChengLiang"> 作品集 連結</portfolio>
    </div>
  </div>
</template>

<style scoped></style>
