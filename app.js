const App = {
    data() {
        return {
            counter: 1,
            handlerDatabase: "MySQL",
            userDatabase: " User",
            numbVersionApp: "0.0.1",
            conditionSign: "Вход",
            inputTypeServer: undefined,
            inputUserName: undefined,
            switchLogicFirst: true,
            switchLogicSecond: true,
            outputServerInfo: undefined,
            arrayHistory: [],
        }
    },
    methods: {
        logirov() {
            this.arrayHistory.push([`(${this.inputTypeServer}) `, `${this.inputUserName}`]);
            this.switchLogicFirst = false;
        },
        removes(index) {
            this.arrayHistory.splice(index, 1)
        }
    }
}

const app = Vue.createApp(App);

app.component('todo-item', {
    props: ['todo'],
    template: `
    <div class="component">
            <ul class="component__list-actions">
              <li class="component__item-actions">
                <a href="#" class="component__link-actions link link-ui-inteface">Полномочия</a>
              </li>
              <li class="component__item-actions">
                <a href="#" class="component__link-actions link link-ui-inteface">Полномочия</a>
              </li>
              <li class="component__item-actions">
                <a href="#" class="component__link-actions link link-ui-inteface">Полномочия</a>
              </li>
              <li class="component__item-actions">
                <a href="#" class="component__link-actions link link-ui-inteface">Полномочия</a>
              </li>
              <li class="component__item-actions">
                <a href="#" class="component__link-actions link link-ui-inteface">Полномочия</a>
              </li>
            </ul>
            <p class="component__sign">Версия MySQL<span class="component__sign-main-inform">5.5.5-10.3.13-MariaDB-log</span>с PHP-расширением MySQLi</p>
            <p class="component__sign">Вы вошли как: <span class="component__sign-main-inform">root@localhost</span></p>
            <table class="component__table component-table">
              <thead>
                <tr>
                  <td></td>
                  <th>База данных - <a href="#">Обновить</a></th>
                  <td>Режим сопоставления</td>
                  <td>Таблицы</td>
                  <td>Размер - <a href="#">Вычислить</a></td>
                </tr>
              </thead>
              <tbody>
                <tr class="component-table__row">
                  <td class="component-table__col"><input type="checkbox" value="db_test" /></td>
                  <th class="component-table__col component-table__th"><a href="#">db_test</a></th>
                  <td class="component-table__col"><a href="#" title="Изменить базу данных">utf8_general_ci</a></td>
                  <td align="right" class="component-table__col"><a href="#" title="Схема базы данных">?</a></td>
                  <td align="right" class="component-table__col">?</td>
                </tr>
                <tr class="component-table__row">
                  <td class="component-table__col"><input type="checkbox" value="db_test" /></td>
                  <th class="component-table__col component-table__th"><a href="#">db_test</a></th>
                  <td class="component-table__col"><a href="#" title="Изменить базу данных">utf8_general_ci</a></td>
                  <td align="right" class="component-table__col"><a href="#" title="Схема базы данных">?</a></td>
                  <td align="right" class="component-table__col">?</td>
                </tr>
                <tr class="component-table__row">
                  <td class="component-table__col"><input type="checkbox" value="db_test" /></td>
                  <th class="component-table__col component-table__th"><a href="#">db_test</a></th>
                  <td class="component-table__col"><a href="#" title="Изменить базу данных">utf8_general_ci</a></td>
                  <td align="right" class="component-table__col"><a href="#" title="Схема базы данных">?</a></td>
                  <td align="right" class="component-table__col">?</td>
                </tr>
              </tbody>
            </table>
            <div class="component__control component-controls">
              <div class="component-controls__box-control">
                <p class="component-controls__sign-control">Выбранные (0)</p>
                <div class="component-controls__button">Удалить</div>
              </div>
            </div>
          </div>
    `
})

app.component('route-panel-control', {
    props: ['todo'],
    template: `
    <div class="container__component-server component-server-control">
          <div class="component-server-control__base-info">
            <label
              >DB
              <select class="component-server-control__select select-ui">
                <option value="MySQL">MySQL</option>
                <option value="MySQL">MySQL</option>
                <option value="MySQL">MySQL</option>
                <option value="MySQL">MySQL</option>
                <option value="MySQL">MySQL</option>
              </select>
            </label>
          </div>
          <div class="component-server-control__base-info">
            <a href="#" class="component-server-control__link link link-ui-inteface">Запрос</a>
            <a href="#" class="component-server-control__link link link-ui-inteface">Запрос</a>
            <a href="#" class="component-server-control__link link link-ui-inteface">Запрос</a>
          </div>
        </div>
    `
})

app.component('route-select-table-bd', {
    props: ['todo'],
    template: `
    <div class="container__component-server component-server-control__base-info route-select-table">
    <ul class="route-select-table__list">
          <li class="route-select-table__item">
            <a class="route-select-table__link link link-ui-inteface" href="#">Выбрать </a> 
            <a class="route-select-table__link link link-ui-inteface" href="#">Да</a>
          </li>
          <li class="route-select-table__item ">
            <a class="route-select-table__link link link-ui-inteface" href="#">Выбрать </a> 
            <a class="route-select-table__link link link-ui-inteface" href="#">Да</a>
          </li>
          <li class="route-select-table__item">
            <a class="route-select-table__link link link-ui-inteface" href="#">Выбрать </a> 
            <a class="route-select-table__link link link-ui-inteface" href="#">Да</a>
          </li>
          <li class="route-select-table__item">
            <a class="route-select-table__link link link-ui-inteface" href="#">Выбрать </a> 
            <a class="route-select-table__link link link-ui-inteface" href="#">Да</a>
          </li>
          <li class="route-select-table__item">
            <a class="route-select-table__link link link-ui-inteface" href="#">Выбрать </a> 
            <a class="route-select-table__link link link-ui-inteface" href="#">Да</a>
          </li>
          <li class="route-select-table__item">
            <a class="route-select-table__link link link-ui-inteface" href="#">Выбрать </a> 
            <a class="route-select-table__link link link-ui-inteface" href="#">Да</a>
          </li>
        </ul>
    </div>
    `
})

app.component('login-form', {
    props: ['vdd'],
    template: `
    <form action="#" method="POST" class="main-content__container">
            <table border="1px" class="main-content__table-form table-form">
              <tr class="table-form__line">
                <td class="table-form__column table-form__column--label">
                  <label class="table-form__label">Движок</label>
                </td>
                <td class="table-form__column">
                  <select class="table-form__select table-form-input select-ui">
                    <option value="">--</option>
                    <option value="MySQL">MySQL</option>
                    <option value="SQLite">SQLite</option>
                  </select>
                </td>
              </tr>
              <tr class="table-form__line">
                <td class="table-form__column table-form__column--label"><label class="table-form__label">Сервер</label></td>
                <td class="table-form__column">
                  <input type="text" class="table-form-input" placeholder="localhost" />
                </td>
              </tr>
              <tr class="table-form__line">
                <td class="table-form__column table-form__column--label"><label class="table-form__label">Имя пользователя</label></td>
                <td class="table-form__column">
                  <input type="text" class="table-form-input" />
                </td>
              </tr>
              <tr class="table-form__line">
                <td class="table-form__column table-form__column--label"><label class="table-form__label">Пароль</label></td>
                <td class="table-form__column">
                  <input type="password" class="table-form-input" />
                </td>
              </tr>
              <tr class="table-form__line">
                <td class="table-form__column table-form__column--label"><label class="table-form__label">База данных</label></td>
                <td class="table-form__column">
                  <input type="text" class="table-form-input" />
                </td>
              </tr>
            </table>
            <div class="table-form__box-control">
              <a href="#" class="table-form__submit" v-on:click="test">Войти</a>
              <label><input type="checkbox" class="table-form__checkbox" />{{vdd}}</label>
            </div>
          </form>
    `,
    methods: {
        test() {
            this.$root.logirov();
        }
      },
})

app.component('breadcrums', {
    props: ['todo'],
    template: `
          <ul class="breadcrums__list">
            <li class="breadcrums__item"><a href="#" class="breadcrums__list-link link link-ui-inteface">MySQL >></a></li>
            <li class="breadcrums__item"><a href="#" class="breadcrums__list-link link link-ui-inteface">Servers</a></li>
          </ul>
    `
})

app.mount("#container");