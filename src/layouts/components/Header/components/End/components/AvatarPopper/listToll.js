let listToll = [
    [
        {
            icon: <i class="fa-regular fa-user"></i>,
            title: 'Kênh của bạn',
        },
        {
            icon: <i class="fa-brands fa-youtube"></i>,
            title: 'Youtube Studio',
        },
        {
            icon: <i class="fa-solid fa-money-bill-transfer"></i>,
            title: 'Chuyển đổi tài khoản',
        },
        {
            icon: <i class="fa-solid fa-right-from-bracket"></i>,
            title: 'Đăng xuất',
        },
    ],
    [
        {
            icon: <i class="fa-solid fa-dollar-sign"></i>,
            title: 'Giao dịch mua và gói thành viên',
        },
        {
            icon: <i class="fa-solid fa-database"></i>,
            title: 'Dữ liệu của bạn trong Youtube',
        },
    ],
    [
        {
            icon: <i class="fa-regular fa-moon"></i>,
            title: 'Giao diện: giao diện thiết bị',
            children: {
                title: 'Giao diện',
                data: [
                    {
                        check: true,
                        title: 'Dùng giao diện của thiết bị',
                    },
                    {
                        check: false,
                        title: 'Giao diện tối',
                    },
                    {
                        check: false,
                        title: 'Giao diện sáng',
                    },
                ],
            },
        },
        {
            icon: <i class="fa-solid fa-language"></i>,
            title: 'Ngôn ngữ: Tiếng Việt',
            children: {
                title: 'Chọn ngôn ngữ của bạn',
                data: [
                    {
                        check: true,
                        title: 'Tiếng Việt',
                    },
                    {
                        check: false,
                        title: 'English(US)',
                    },
                    {
                        check: false,
                        title: 'English(UK)',
                    },
                    {
                        check: false,
                        title: 'Francais',
                    },
                    {
                        check: false,
                        title: 'Japanese',
                    },
                ],
            },
        },
        {
            icon: <i class="fa-sharp fa-solid fa-shield-halved"></i>,
            title: 'Chế độ hạn chế: Đã tắt',
        },
        {
            icon: <i class="fa-solid fa-globe"></i>,
            title: 'Địa điểm: Hoa Kỳ',
            children: {
                title: 'Chọn vị trí của bạn',
                data: [
                    {
                        check: false,
                        title: 'Ai Cập',
                    },
                    {
                        check: false,
                        title: 'Ấn độ',
                    },
                    {
                        check: false,
                        title: 'Bồ Đào Nha',
                    },
                    {
                        check: false,
                        title: 'Hoa Kỳ',
                    },
                    {
                        check: false,
                        title: 'Nhật Bản',
                    },
                    {
                        check: true,
                        title: 'Việt Nam',
                    },
                    {
                        check: false,
                        title: 'Hồng Kông',
                    },
                    {
                        check: false,
                        title: 'Hy Lạp',
                    },
                    {
                        check: false,
                        title: 'Na Uy',
                    },
                    {
                        check: false,
                        title: 'Ý',
                    },
                    {
                        check: false,
                        title: 'Hàn Quốc',
                    },
                ],
            },
        },
        {
            icon: <i class="fa-solid fa-keyboard"></i>,
            title: 'Phím Tắt',
        },
    ],
    [
        {
            icon: <i class="fa-solid fa-gear"></i>,
            title: 'Cài đặt',
        },
    ],
    [
        {
            icon: <i class="fa-solid fa-question"></i>,
            title: 'Trợ giúp',
        },
        {
            icon: <i class="fa-solid fa-circle-exclamation"></i>,
            title: 'Gửi phản hồi',
        },
    ],
];
export default listToll;
