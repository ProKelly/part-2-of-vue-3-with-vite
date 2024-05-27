import swal from "sweetalert";
export function useflash() {
    function flash(message) {
        return swal('Sucess!', message, 'success');
    }

    return { flash };
}