/* eslint-disable indent */
<template>
    <div class="content" v-if="availableParts">
      <div class="preview">
    <collapsible-section>
          <div class="preview-content">
            <div class="top-row">
              <img :src="selectedRobot.head.src"/>
            </div>
            <div class="middle-row">
              <img :src="selectedRobot.leftArm.src" class="rotate-left"/>
              <img :src="selectedRobot.torso.src"/>
              <img :src="selectedRobot.rightArm.src" class="rotate-right"/>
            </div>
            <div class="bottom-row">
              <img :src="selectedRobot.base.src"/>
            </div>
          </div>
    </collapsible-section>
        <button class="add-to-cart" @click="addToCart">Add-To-Cart</button>
      </div>
        <div class="top-row">
            <!-- <div class="robot-name">
                {{ selectedRobot.head.title }}
                <span class="sale" v-if="selectedRobot.head.onSale">On-Sale!</span>
                <span class="sale" v-else>Sold-Out!</span>
            </div>  -->
            <part-selector :parts='availableParts.heads' position="top" 
              @partSelected='part => selectedRobot.head = part'/>
        </div>

        <div class="middle-row">
          <part-selector :parts='availableParts.arms' position="left"
            @partSelected='part => selectedRobot.leftArm = part'/>
          <part-selector :parts='availableParts.torsos' position="center"
            @partSelected='part => selectedRobot.torso = part'/>
          <part-selector :parts='availableParts.arms' position="right"
            @partSelected='part => selectedRobot.rightArm = part'/>
        </div>

        <div class="bottom-row">
        <part-selector :parts='availableParts.bases' position="bottom"
          @partSelected='part => selectedRobot.base = part'/>
        </div>

        <!-- <div>
          <h1>Cart</h1>
          <table>
            <thead>
              <tr>
                <th>Robot Name</th>
                <th class="cost">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="robot in cart" :key="robot.head.id">
                <td>{{ robot.head.title }}</td>
                <td class="cost">{{ robot.cost }} $</td>
              </tr>
            </tbody>
          </table>
        </div> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex';
// import availableParts from '../data/parts';
import partSelector from './PartSelector.vue'; 
import collapsibleSection from '../shared/CollapsibleSection.vue'; 

export default {
    name: 'BuildRobot',
    created() {
      this.getParts();
    },
    beforeRouteLeave(to, from, next) {
      if (this.addedToCart) {
        next(true);
      } else {
          /* eslint no-alert: 0 */
          /* eslint no-restricted-globals:0 */
          const response = confirm('Are uou sur you want to leave, you robot has not been added to cart');
          next(response);
      }
    },
    components: {
      partSelector,
      collapsibleSection,
    },

    data() {
        return {
            addedToCart: false,
            // availableParts,
            cart: [],
            selectedRobot: {
                head: {},
                leftArm: {},
                torso: {},
                rightArm: {},
                base: {},
            },
        };
    },

    computed: {
      availableParts() {
        return this.$store.state.robots.parts;
      },
    },

    methods: {
      ...mapActions('robots', ['getParts', 'addRobotToCart']),
      addToCart() {
        const robot = this.selectedRobot;
        const cost = robot.head.cost 
          + robot.leftArm.cost 
          + robot.torso.cost 
          + robot.rightArm.cost 
          + robot.base.cost;
        this.addRobotToCart({ ...robot, cost })
            .then(() => this.$router.push('/cart'));  
        // this.cart.push({ ...robot, cost });
        this.addedToCart = true;
      },
    },
};

</script>

<style scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
} 
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;    
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;  
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;    
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
    position: absolute;
    top: -25px;
    width: 130%;
    font-weight: bold;
}
.sale {
    color: red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  width: 210px;
  padding: 3px;
  font-size: 16px;
}
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>
