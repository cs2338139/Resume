<script setup>
import info from "../components/info.vue";
import skill from "../components/skill.vue";
import skillCategory from "../components/skill-category.vue";
import skillTable from "../components/skill-Table.vue";
import skillTableItem from "../components/skill-Table-Item.vue";
import introduction from "../components/introduction.vue";
import timeline from "../components/timeline.vue";
import timelineItem from "../components/timeline-Item.vue";
</script>

<template>
  <div class="wrap flex flex-col items-center">
    <info class="mb-10" email="cs2338139@gmail.com">
      <template #name>梁晋誠</template>
      <template #enName>LIANG JIN CHENG</template>
      <template #birthday>1995／12／08</template>
      <template #skill>前端網頁／Unity／VR／互動工程／遊戲開發</template>
      <template #education>南臺科技大學 多媒體與電腦娛樂科學系</template>
      <!-- <template #info>
        南臺科技大學多媒體與電腦娛樂科學系，畢業製作STEAMNANO於2018年青春設計節取得了互動科技與遊戲設計類「金獎」。<br />
        曾任職於互動設計公司，執行了多項Unity程式開發，並且有實務開發經驗。範圍不局限於Window平台，其中也有行動裝置與VR。<br />
        除了Unity外，也使用過不同類型的開發技術: Processing、Arduino...等。
      </template> -->
      <template #place>臺北，Taiwan</template>
      <template #mail>cs2338139@gmail.com</template>
      <template #phone>0975-601935</template>
    </info>

    <introduction class="mb-10">
      <template #title>個人簡述</template>
      <template #content>
        曾作為工程師任職於互動設計公司，執行了多項互動設計相關的開發專案。<br />
        我能夠善用各種不同的開發工具來達到專案的目的，而隨著自己的職涯規劃，也慢慢地從互動設計轉往網頁前端。在一次專案的需求下，我以自學的方式踏入了前端網頁的領域，同時也成為公司的網站開發案的負責人，獨立完成了數個網頁開發的專案。<br />
        相比過去開發的互動App或是現場的互動機構裝置，我更喜歡網站的形式，它不用讓使用者特地去安裝App或是到現場才能觀看，只需要瀏覽器和網路就能夠將資訊與畫面傳遞給使用者，大大的推廣了作品的傳遞幅度，這樣的便捷讓我深深的著迷。<br />
        我喜歡嘗試不同的新東西，會研究沒有使用過的開發工具，或是不同的程式撰寫方法，來達到更有效的開發。<br />
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
                <skillTableItem>Processing</skillTableItem>
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
                <skillTableItem>Socket</skillTableItem>
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
          <template #position>互動工程師</template>
          <template #company>Pixelight.／愛迪斯科技 專案部</template>
          <template #time>2020 / 10～2023 / 2</template>
          <template #content> 參與了多項互動開發: 玩花VR體驗、AI鞋匠、尋常茶VR體驗。</template>
        </timelineItem>
        <timelineItem>
          <template #position>互動工程師</template>
          <template #company>玩味創研 Play Design Lab</template>
          <template #time>2020 / 6～202 / 9</template>
          <template #content> 以Unity為主要開發工具，同時也按需求使用了Arduino與Raspberry Pi等不同的開發工具。<br />
            參與了多項互動開發：<br/>
            <ul class="list-disc list-inside">
              <li>2020 國立科學工藝博物館－邁向 AIoT 意象牆</li>
              <li>2020 國立科學工藝博物館－AI鞋匠</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
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
  </div>
</template>

<style scoped></style>
