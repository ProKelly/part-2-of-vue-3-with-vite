import swal from "sweetalert";
export function useflash() {
    function flash(title, message, level) {
        return swal(title , message, level);
    }

    return { flash };
}