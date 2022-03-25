<template>
    <teleport to="body">
        <div class="modal-container" @click="$emit('undo')">
            <div class="modal">
                <h3 class="modalHeader">Delete Comment</h3>
                <p class="disclaimer">Are You Sure You Want To Delete This Comment? This Will Remove The Comment And Can't Be Undone</p>
                <div class="btnCont">
                    <button class="Undo" @click="$emit('undo')">NO, CANCEL</button>
                    <button class="Remove" @click="$emit('confirm')">YES, DELETE</button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
export default {
    emits:['confirm', 'undo']
}
</script>

<style scoped>

.modal-container {
    width: 100%;
    height: 100vh;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    position: fixed;
    /* Stay in place */
    z-index: 10;
    /* Sit on top */
    /* Location of the box */
}

.modal {
    position: relative;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    width: 25%;
    min-width: 300px;
    border-radius: 10px;
    font-size: 16px;
}

.modal h3 {
    color: hsl(211, 10%, 45%)
}

.btnCont {
    display: flex;
    justify-content: space-around;
}

.btnCont button {
    padding: 13px 25px 13px;
    color: white;
    border: 0px;
    border-radius: 7px;
    margin: 10px 5px 10px;
}

.disclaimer {
    margin: 20px 0 10px;
    color: hsl(225, 4%, 63%);
}

.Remove {
    background-color: hsl(358, 79%, 66%);
}

.Undo {
    background-color: hsl(211, 10%, 45%);
}

</style>