const arrQ = [
    ["마음이 조급할 때 여유를 가지기 위해 피운다.","능률을 높이기 위해 피운다.","기분전환을 하려고 피운다."],
    ["담배, 라이터, 성냥 등을 만지작거리는 버릇이 있다.","담배를 꺼내 불을 붙이고 연기를 들여마셨다가 내뿜고 재떨이에 비벼 끄는 과정 자체가 좋다.","담배 연기로 모양을 만드는 것을 좋아한다."],
    ["담배를 피우면 마음이 가라앉는다.","담배 연기를 내뿜으면 나른한 행복감을 느낄 수 있다.","마음이 편안할 때면 담배 생각이 더 난다."],
    ["흥분하거나 화가 났을 때 담배를 찾게 된다.","불안하고 긴장되면 담배를 피우게 된다.","마음이 울적하거나 걱정거리가 있을 때 담배를 피운다."],
    ["담배가 떨어지면 안절부절못한다.","아무리 바빠도 담배를 거르면 마음 한구석에 담배 생각이 난다.","오랫동안 안 피우다가 한 대 피우면 그 순간 불안했던 마음이 사라진다."],
    ["자신도 모르는 사이에 담배를 물고 있는 것을 발견하곤 한다.","특정한 장소(화장실 등)에서는 담배가 당기지 않는데도 흡연하게 된다.","특정한 상황(식사 후 등)에서는 담배가 당기지 않는데도 흡연하게 된다."],
    ["주위 사람들이 흡연하면 나도 담배를 피운다.","동료/친구들과 함께 흥겨운 시간을 보낼때 흡연하게 된다.","나는 친구들과 회식이나 모임을 할 때 항상 흡연한다."]
]

var arrA = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

var currentQ = 0; 

function changeQ(isnext){
    arrA[currentQ][0] = Number($('input[name=Q1]:checked').val());
    arrA[currentQ][1] = Number($('input[name=Q2]:checked').val());
    arrA[currentQ][2] = Number($('input[name=Q3]:checked').val());

    if(isnext == '0'){
        currentQ = currentQ - 1;
    }
    else if(isnext == '1'){
        currentQ = currentQ + 1;
    }

    if(currentQ < 0)currentQ = 0;

    if(currentQ > 6){
        $("table").remove();
        $("button").remove();

        localStorage.setItem('A',(arrA[0][0]+arrA[0][1]+arrA[0][2]).toString());
        localStorage.setItem('B',(arrA[1][0]+arrA[1][1]+arrA[1][2]).toString());
        localStorage.setItem('C',(arrA[2][0]+arrA[2][1]+arrA[2][2]).toString());
        localStorage.setItem('D',(arrA[3][0]+arrA[3][1]+arrA[3][2]).toString());
        localStorage.setItem('E',(arrA[4][0]+arrA[4][1]+arrA[4][2]).toString());
        localStorage.setItem('F',(arrA[5][0]+arrA[5][1]+arrA[5][2]).toString());
        localStorage.setItem('G',(arrA[6][0]+arrA[6][1]+arrA[6][2]).toString());

        location.href = "Answer.html"
    }
    else{
        document.getElementById("Qu1").innerText = arrQ[currentQ][0];
        document.getElementById("Qu2").innerText = arrQ[currentQ][1];
        document.getElementById("Qu3").innerText = arrQ[currentQ][2];

        $("input:radio[name='Q1']").prop('checked',false);
        $("input:radio[name='Q2']").prop('checked',false);
        $("input:radio[name='Q3']").prop('checked',false);

        if(arrA[currentQ][0] > 0){
            var str = "input:radio[id="+(10+arrA[currentQ][0]).toString()+"]";
            $(str).prop('checked',true);
        }
        if(arrA[currentQ][1] > 0){
            var str = "input:radio[id="+(20+arrA[currentQ][1]).toString()+"]";
            $(str).prop('checked',true);
        }
        if(arrA[currentQ][2] > 0){
            var str = "input:radio[id="+(30+arrA[currentQ][2]).toString()+"]";
            $(str).prop('checked',true);
        }
    }
}