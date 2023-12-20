export function site() {
    $(window).scroll(function () {
        let height = $(window).scrollTop();
        console.log(height);

        // https://velog.io/@gil0127/%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9C%84%EC%B9%98%EC%97%90-%EB%94%B0%EB%9D%BC-%EB%B3%80%ED%95%98%EB%8A%94-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-Apple-Music-UI-%EB%A7%8C%EB%93%A4%EA%B8%B0
        // 스크롤 위치가 3687 ~ 4587 일 때 0 ~ 1이 되는 y 구하기
        // y = mx + n --> 1 = 3687a + b, 0 = 4587a + b

        let y = '';
        y = a * height + b;

        $('.site__img').eq(0).css('opacity', y);
    });
}