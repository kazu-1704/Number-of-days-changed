document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('title');
  const content = document.getElementById('content');
  const confirmBtn = document.getElementById('confirm-btn');
  const notification = document.getElementById('notification');
  const buttons = document.querySelectorAll('.action-button');

  const pages = {
    1: {
      title: 'INFORMATION',
      content: 'Name: Lê Quốc Khánh<br>Nickname: Tricker Lỏ, Kazuto<br>Height/Weight: 1M65/44Kg<br>Date of Birth: 17/04<br>Hometown: Đà Nẵng'
    },
    2: {
      title: 'OCCUPATION',
      content: '1: Học sinh<br>2: Gamer<br>3: Coder<br>4: Cuber<br>5: Editor'
    },
    3: {
      title: 'INTEREST',
      content: '1: Chơi game (AoV, HoK, Zsm, Genshin)<br>2: Đọc truyện tranh (Manwa, Manhua, Manwa)<br>3: Đọc tiểu thuyết (Ln, Wn)<br>4: Xem phim<br>5: Edit video<br>6: Chơi rubik<br>7: Viết code'
    },
    4: {
      title: 'CONTACTS',
      content: 'Chưa gắn=))'
    }
  };

  let currentButton = null;

  function updatePage(pageId) {
    const page = pages[pageId];
    title.textContent = page.title;
    content.innerHTML = page.content;

    if (currentButton) currentButton.classList.remove('clicked');
    currentButton = document.querySelector(`[data-page="${pageId}"]`);
    currentButton.classList.add('clicked');
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const pageId = button.getAttribute('data-page');
      if (button === currentButton) {
        currentButton.classList.remove('clicked');
        title.textContent = 'KONNICHIWA❤';
        content.innerHTML = ' Tôi là Quốc Khánh, 1 thằng otaku vô dụng chỉ biết ngày đêm ở trong nhà xem anime nhưng muốn vượt qua mọi thử thách để đến với thành công🗿🗿🗿?';
        currentButton = null;
      } else {
        updatePage(pageId);
      }
    });
  });

  confirmBtn.addEventListener('click', () => {
    notification.classList.add('hide');
    const music = document.getElementById('background-music');
    if (music) music.play();
  });
});