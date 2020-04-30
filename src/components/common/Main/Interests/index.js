import React from "react";
import styles from "./style.module.css";

const Interest = () => {
  const inter = [
    {
      className: "coding",
      image: "/asset/image/data.png",
      background: "/asset/image/coding.jpg",
      title: "CODING",
      content:
        "Cách duy nhất để trở nên tốt hơn trong lập trình là thực hành càng nhiều càng tốt. Không có cách nào học code nhanh hơn cách này cả. Luyện tập luyện tập và luyện tập và chỉ có cách đó mới giúp tôi trở nên lão luyện mà thôi.",
    },
    {
      className: "booking",
      image: "/asset/image/books.png",
      background: "/asset/image/book.jpg",
      title: "ĐỌC SÁCH",
      content:
        "Dù có vô tình hay chủ động thì tôi luôn nhận được những trải nghiệm thú vị khi đọc sách. Bạn biết đấy sách là kho tàng tri thức của nhân loại, và đọc sách là cách nhanh nhất để tiếp cận với kho tàng ấy.",
    },
    {
      className: "travelling",
      image: "/asset/image/travel.png",
      background: "/asset/image/travelling.jpg",
      title: "DU LỊCH",
      content:
        "Chu du khắp nơi là niềm yêu thích của tôi, khám phá và học hỏi những điều thú vị trong cuộc sống khi tiếp xúc với vùng đất mới, những con người chưa từng gặp, đôi khi bắt gặp những khoảnh khắc tình cờ không đễ dàng chiêm ngưỡng.",
    },
    {
      className: "news",
      image: "/asset/image/news.png",
      background: "/asset/image/news.jpg",
      title: "TIN TỨC",
      content:
        "Tin tức mang bản chất là sự mới mẻ, những thông tin mang tính thời sự đều là những chủ đề đáng quan tâm. Khác với sách, người đưa tin luôn trên phương diện trung lập và khách quan về những vấn đề của thời cuộc. Luôn cập nhật tin tức cũng là thói quen hằng ngày của tôi.",
    },
    {
      className: "game",
      image: "/asset/image/game.png",
      background: "/asset/image/gamming.jpg",
      title: "CHƠI GAME",
      content:
        "Giải trí bằng cách chơi game sau những giờ học căng thẳng cũng mang lại cho tôi nhiều lợi ích tích cực và cả sự tập trung. Tôi luôn biết cách kiểm soát mức độ chơi game của mình một cách khoa học.",
    },
    {
      className: "music",
      image: "/asset/image/music.png",
      background: "/asset/image/music.jpg",
      title: "NGHE NHẠC",
      content:
        "Đắm mình vào âm nhạc giúp tôi thư giãn đầu óc và giảm stress. Nghe nhạc thực sự tuyệt vời hơn bạn nghĩ. Những câu chuyện và cảm xúc được gửi gắm vào trong từng giai điệu và lời bài hát, dễ dàng được con tim đón nhận hơn. Tôi rất thích nghe những ca khúc của nhạc sĩ Phan Mạnh Quỳnh, đôi khi vu vơ hát theo.",
    },
  ];

  return (
    <section className={styles.interests} id="interests">
      <div class="title">SỞ THÍCH</div>
      <div className={styles.cardContainer}>
        {inter.map((x, index) => (
          <div className={styles.card} key={index}>
            <div
              className={`${styles.face} ${styles.face1} ${x.className}`}
              style={{
                background: `url(${x.background})`,
                backgroundSize: "cover",
              }}
            >
              <div className={styles.content}>
                <img src={x.image} />
                <h3>{x.title}</h3>
              </div>
            </div>
            <div className={`${styles.face} ${styles.face2}`}>
              <div className={styles.content}>
                <p>{x.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Interest;
