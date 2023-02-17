<template>
  <div class="container">
    <div class="user-card">
      <h1>Научу зарабатывать от 50 000р. в час</h1>
      <div class="main-information">
        <img class="image" src="../assets/22.jpg" />
        <div class="info">
          <h2>{{ getAuthorFullName }}</h2>
          <strong>Бизнес-коуч</strong>
          <ul class="list">
            <li>
              Учу делать РЕАЛЬНЫЕ бабки, на себя просто не хватило времени
            </li>
            <li>
              НЕ знаю, что такое "Успешный Успех", но знаю, что нужно ТЕБЕ!
            </li>
            <li>Пообещал, что побреюсь, когда кого-нибудь ОБМАНУ.</li>
          </ul>
        </div>
      </div>
      <h1>Список участников</h1>
      <div>
        <li v-for="(user, index) in users" :key="user.firstName + index">
          {{ `${user.firstName} ${user.lastName} ${user.secondName}` }}
        </li>
        <div class="pagination-container">
          <button @click="decrementCurrentPage">пред</button>
          <button @click="currentPage = page" v-for="page in pages" :key="page">
            {{ page }}
          </button>
          <button @click="incrementCurrentPage">след</button>
        </div>
        <h3>Выбранная страница {{ currentPage }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  data() {
    return {
      firstName: "Игнатий",
      secondName: "Иларионович",
      lastName: "Богатов",
      users: [
        {
          firstName: "Игнатий",
          secondName: "Иларионович",
          lastName: "Богатов",
        },
        {
          firstName: "Bob",
          secondName: "Валерьевич",
          lastName: "Богатов",
        },
        {
          firstName: "Мавроди",
          secondName: "Мамонтов",
          lastName: "Щелкунов",
        },
        {
          firstName: "Игнатий2",
          secondName: "Иларионович",
          lastName: "Богатов",
        },
        {
          firstName: "Bob2",
          secondName: "Валерьевич",
          lastName: "Богатов",
        },
        {
          firstName: "Мавроди2",
          secondName: "Мамонтов",
          lastName: "Щелкунов",
        },
        {
          firstName: "Игнатий3",
          secondName: "Иларионович",
          lastName: "Богатов",
        },
        {
          firstName: "Bob3",
          secondName: "Валерьевич",
          lastName: "Богатов",
        },
        {
          firstName: "Мавроди3",
          secondName: "Мамонтов",
          lastName: "Щелкунов",
        },
      ],
      pages: 3,
      currentPage: 1,
    };
  },
  computed: {
    getAuthorFullName() {
      return `${this.firstName} ${this.secondName} ${this.lastName}`.toUpperCase();
    },
    getCurrentPageInPages() {
      return `${this.currentPage} из ${this.pages}`;
    },
  },
  methods: {
    incrementCurrentPage() {
      if (this.currentPage !== this.pages) {
        return this.currentPage++;
      }
    },
    decrementCurrentPage() {
      if (this.currentPage !== 1) {
        return this.currentPage--;
      }
    },
  },
};
</script>

<style scoped>
.user-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-information {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info {
  margin-left: 50px;
}

.image {
  width: 200px;
  height: 100px;
}

.pagination-container {
  display: flex;
  justify-content: center;
}

h4 {
  margin: 4px;
}

h2 {
  margin-bottom: 14px;
}
</style>
