<template>
  <div class="messages">
    <div class="filter-left">
      <i class="icofont-chart-bar-graph"></i>
      <div class="filter-name">Сообщения</div>
    </div>
    <div class="messages-page">
      <div class="messages-page__inner">
        <div class="messages-menu">
          <div class="messages-menu__top">
            <div class="navbar-search">
              <input type="search" placeholder="Поиск..." />
              <span class="icofont icofont-search"></span>
            </div>
            <button type="button" class="messages-menu__btn">
              Создать группу
            </button>
          </div>
          <div class="messages-contacts">
            <div class="messages-contacts__list">
              <div class="messages-contacts__left">
                <span class="messages-contacts__status"></span>
                <div class="messages-contacts__name">Азиза</div>
              </div>
              <div class="messages-contacts__num">5</div>
            </div>
            <div class="messages-contacts__list active-list">
              <div class="messages-contacts__left">
                <span class="messages-contacts__status active"></span>
                <div class="messages-contacts__name">Сергей</div>
              </div>
            </div>
            <div class="messages-contacts__list">
              <div class="messages-contacts__left">
                <i class="icofont-people"></i>
                <div class="messages-contacts__name">Отдель продаж</div>
              </div>
              <div class="messages-contacts__num">5</div>
            </div>
          </div>
        </div>
        <div class="messages-main">
          <div class="messages-main__title">Сегодня</div>
          <div class="messages-display">
            <div class="messages-itself guest">
              <div class="messages-itself__top">
                <div class="messages-itself__inner">
                  <img src="../assets/image/profile.jpg" alt="" />
                  <div class="messages-itself__name">Мадина</div>
                </div>
                <div class="messages-itself__time">18:00</div>
              </div>
              <div class="messages-itself__body">
                сегодня я не смогу выйти на работу, плохо себя чувствую
              </div>
            </div>
            <div class="messages-itself host">
              <div class="messages-itself__top">
                <div class="messages-itself__inner">
                  <img src="../assets/image/profile.jpg" alt="" />
                  <div class="messages-itself__name">Севара</div>
                </div>
                <div class="messages-itself__time">18:01</div>
              </div>
              <div class="messages-itself__body">
                Хорошо выздоравливайте, завтра ждём Вас
              </div>
            </div>
            <div class="messages-form">
              <button class="messages-form__btn file">
                <i class="icofont-clip"></i>
                <input type="file" />
              </button>
              <div class="navbar-search">
                <input type="text" placeholder="Написать сообщение" />
              </div>
              <button class="messages-form__btn send">
                <i class="icofont-location-arrow"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
