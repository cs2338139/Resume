<script setup>
import info from "../components/info.vue";
import skill from "../components/skill.vue";
import skillTable from "../components/skill-Table.vue";
import skillTableItem from "../components/skill-Table-Item.vue";
import introduction from "../components/introduction.vue";
</script>

<template>
  <div class="wrap flex flex-col items-center">
    <info class="dev-black mb-10" email="cs2338139@gmail.com">
      <template #name>梁晋誠</template>
      <template #enName>skillTableItemANG JIN CHENG</template>
      <template #birthday>1995/12/08</template>
      <template #skill>Unity / VR / 互動工程 / 遊戲開發</template>
      <template #sortInfo>興趣廣泛，對不同領域都充滿了好奇心，喜歡自己動手DIY實驗。</template>
      <template #info>
        南臺科技大學多媒體與電腦娛樂科學系，畢業製作STEAMNANO於2018年青春設計節取得了互動科技與遊戲設計類「金獎」。<br />
        曾任職於互動設計公司，執行了多項Unity程式開發，並且有實務開發經驗。範圍不局限於Window平台，其中也有行動裝置與VR。<br />
        除了Unity外，也使用過不同類型的開發技術: Processing、Arduino...等。
      </template>
      <template #place>臺北，Taiwan</template>
      <template #mail>cs2338139@gmail.com</template>
      <template #phone>0975-601935</template>
    </info>

    <skill class="dev-black mb-10">
      <template #title>技能</template>
      <template #content>
        <skillTable>
          <template #title>工程</template>
          <template #content>
            <skillTableItem>Unity / C＃</skillTableItem>
            <skillTableItem>VR (HTC Vive、Google CardBoard)</skillTableItem>
            <skillTableItem>Processing</skillTableItem>
            <skillTableItem>C++ </skillTableItem>
            <skillTableItem>Arduino</skillTableItem>
            <skillTableItem>Raspberry Pi</skillTableItem>
          </template>
        </skillTable>
        <skillTable>
          <template #title>工程</template>
          <template #content>
            <skillTableItem>Unity / C＃</skillTableItem>
            <skillTableItem>VR (HTC Vive、Google CardBoard)</skillTableItem>
            <skillTableItem>Processing</skillTableItem>
            <skillTableItem>C++ </skillTableItem>
            <skillTableItem>Arduino</skillTableItem>
            <skillTableItem>Raspberry Pi</skillTableItem>
          </template>
        </skillTable>
      </template>
    </skill>

    <introduction class="dev-black mb-10">
      <template #title>個人簡述</template>
      <template #content>
        我是梁晉誠，來自臺南，2018年畢業於南臺科技大學多媒體與電腦娛樂科學系，系上教學內容包含美術設計、數位特效、遊戲設計等，只要跟多媒體相關的都在教學範疇裡面。系上特別重視學生自主研究的部分，我們的技能往往不侷限於課堂教學內容，經過不斷的實作與自主專研，累積了深厚的Unity實作經驗。
        <br />
        <br />
        學生時期進行了許多Unity程式案開發，有了很多的團隊合作實務經驗，善於使用Ｃ＃語言來做編寫，範圍不局限於Window平台，其中也有行動裝置與VR設備。畢業製作STEAMNANO以工業革命做為發想，使用像素風格結合了蒸氣龐克，再加上流暢的操縱性，入圍了2018年青春設計節、金點新秀、Ａ＋設計節、放視大賞，並且在青春設計節取得了互動科技與遊戲設計類「金獎」。
        學生時期不併侷限於課堂上，在學期間參與了許多社團活動，在判斷事情的角度上或是危機處理的能力上都有很大的提升。在大學四年級，受到畢聯會會長得肯定，作為場器長參與了畢聯會的運作，為畢業生服務。
        <br />
        大三期間，被推選為副系會長，作為「總召」並規劃籌備了系上第一屆的系展，對外展出系上各年級作品，評審改由聘請業界專業人士講評，不再局限於系上老師，讓學生的作品走出校園，為系上展覽活動奠定了重要的架構；除了系展之外還舉辦了與其他系所的聯合迎新、聯合茶會、三合一改選委員、電競週、畢業派對等系內外大小型活動，藉此累積了很多活動籌備的經驗。
        <br />
        畢業後，深感自身專業在臺南發展機會甚少，因此第一份工作我選擇先留在臺南，任職於158.棧民宿，儲存未來北上發展所需的資金。在158.棧從事營運規劃專員，其工作主要項目為民宿營運的事項，從顧客接待、在地文化導覽介紹及安排旅遊行程，至民宿的大小活動規劃執行，預想客人可能的需求，並提前作出規劃。公司營運的首年，就在知名訂房網站Booking.com取得9.6的高分。
        <br />
        <br />
        離開158.棧後，來到了台北就業，曾任職於互動設計公司「玩味創研」擔任互動程式設計師，並且參與了多項專案開發。使用的技術也不再局限於Unity，也接觸到了C++、RaspberryPi 與Arduino的開發。
        <br />
        在工作之餘，亦不斷地接收遊戲與互動媒體產業的新知，並且加深自身的能力，期許未來能夠在互動應用產業上能夠有所貢獻。
      </template>
    </introduction>

    <introduction class="dev-black mb-10">
      <template #title>未來期望</template>
      <template #content>
        學生時期進行了許多Unity程式案開發，有了很多的團隊合作實務經驗，善於使用Ｃ＃語言來做編寫，範圍不局限於Window平台，其中也有行動裝置與VR設備。畢業製作STEAMNANO以工業革命做為發想，使用像素風格結合了蒸氣龐克，再加上流暢的操縱性，入圍了2018年青春設計節、金點新秀、Ａ＋設計節、放視大賞，並且在青春設計節取得了互動科技與遊戲設計類「金獎」。
        學生時期不併侷限於課堂上，在學期間參與了許多社團活動，在判斷事情的角度上或是危機處理的能力上都有很大的提升。在大學四年級，受到畢聯會會長得肯定，作為場器長參與了畢聯會的運作，為畢業生服務。
        <br />
        大三期間，被推選為副系會長，作為「總召」並規劃籌備了系上第一屆的系展，對外展出系上各年級作品，評審改由聘請業界專業人士講評，不再局限於系上老師，讓學生的作品走出校園，為系上展覽活動奠定了重要的架構；除了系展之外還舉辦了與其他系所的聯合迎新、聯合茶會、三合一改選委員、電競週、畢業派對等系內外大小型活動，藉此累積了很多活動籌備的經驗。
      </template>
    </introduction>
  </div>
</template>

<style scoped></style>
