import styled from 'vue-styled-components';

export const Wrapper = styled.div`
    min-height: 100vh;
    padding-left: 343px;
    padding-top: 50px;
    position: relative;

    .reminder-noti {
        margin-right: 30px;
        position: absolute;
        right: 0;
    }

    .add-new-task {
        font-weight: bold;
        font-size: 18px;
        line-height: 18px;
        color: #575767;
        cursor: pointer;
    }

    .submit-resume {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #575767;
        margin: 4px 0px;
        padding-left: 16px;
    }

    .date {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        margin: 4px 0px;
        color: #B9B9BE;
        padding-left: 5px;
    }

    .input-checkbox {
        background-color: linear-gradient(180deg, #FCFCFC 0%, #F8F8F8 100%) !important;
        border: 2px solid #DADADA !important;
        box-sizing: border-box !important;
        border-radius: 6px !important;
        width: 24px;
        height: 24px;
    }

    .checked-icon {
        background-repeat: no-repeat;
        background-position: center;
    }

    .vue-chk:focus {
        box-shadow: unset;
    }

    .completed {
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #B9B9BE;
        margin: 4px 0px;
        padding-left: 16px;
    }
`;