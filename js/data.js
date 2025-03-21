let products = {
    livingRoom: [
        {
            id: "SP01",
            name: "Bàn uống nước",
            description: "Size vừa, nâu đậm",
            price: 8999000,
            image: "../assets/img/products/livingRoom/ban-uong-nuoc.jpg",
            option: ['Chất liệu', 'Gỗ sồi', 'Gỗ lim'],
            saleFrom: 12999000,
            sliderImage: [
                "../assets/img/p002-small-1.jpg", 
                "../assets/img/p002-small-2.jpg", 
                "../assets/img/p002-small-3.png", 
                "../assets/img/p002-small-4.png"
            ],
            style: [
                "Bàn cà phê gọn gàng đơn giản với kệ mở", 
                "Phong cách hiện đại, học tối giản", 
                "Kệ bên trong có kích thước hoàn hảo cho tạp chí, đế lót ly và các phụ kiện phòng khách khác", "Có thể được sử dụng như một bàn TV thấp - Kệ mỏng hoàn hảo để chứa một hộp hàng đầu hoặc đầu phát blu-ray", 
                "Làm bằng gỗ Sheesham cao cấp", 
                "Không cần lắp ráp"
            ],
            specifications: [
                "Kích thước 120cm x 60cm x 40cm",
                "Chất liệu Gỗ Sheesham cao cấp",
                "Màu sắc Nâu gỗ tự nhiên",
                "Kiểu dáng Hiện đại, tiện dụng với kệ mở",
                "Khối lượng 18kg"
            ],
            maintenance: [
                "Tránh tiếp xúc trực tiếp với nước và nhiệt độ cao",
                "Lau chùi bằng khăn mềm, không sử dụng hóa chất mạnh",
                "Không đặt vật nặng quá mức lên mặt bàn để tránh biến dạng",
                "Bảo quản nơi khô ráo, thoáng mát"
            ],
            warranty: [
                "Thời gian bảo hành 36 tháng",
                "Phạm vi bảo hành Bảo hành các lỗi kỹ thuật do nhà sản xuất",
                "Không bảo hành Không áp dụng bảo hành với các hư hỏng do sử dụng sai cách hoặc tác động vật lý mạnh"
            ],
            commitment: [
                "Sản phẩm đúng mô tả, chất lượng cao cấp",
                "Gỗ tự nhiên 100%, bền đẹp theo thời gian",
                "Hỗ trợ đổi trả nếu có lỗi từ nhà sản xuất",
                "Giao hàng tận nơi, đóng gói cẩn thận"
            ]
        },
        {
            id: "SP02",
            name: "Bàn uống nước 2",
            description: "Size vừa, nâu vân gỗ",
            price: 3999000,
            image: "../assets/img/products/livingRoom/ban-uong-nuoc-2.jpg"
        },
        {
            id: "SP03",
            name: "Kệ TV",
            description: "4 ngăn, gỗ lim",
            price: 12999000,
            image: "../assets/img/products/livingRoom/ke-tv.jpg"
        },
        {
            id: "SP04",
            name: "Kệ để đồ",
            description: "4 ngăn, trắng gỗ",
            price: 2499000,
            image: "../assets/img/products/livingRoom/ke-de-do.jpg"
        },
        {
            id: "SP05",
            name: "Sofa",
            description: "Size vừa, nâu đậm",
            price: 8999000,
            image: "../assets/img/products/livingRoom/sofa.jpg"
        },
        {
            id: "SP06",
            name: "Sofa 2",
            description: "Size vừa, nâu vân gỗ",
            price: 3999000,
            image: "../assets/img/products/livingRoom/sofa-2.jpg"
        },
        {
            id: "SP07",
            name: "Bàn uống nước",
            description: "4 ngăn, gỗ lim",
            price: 12999000,
            image: "../assets/img/products/livingRoom/ban-uong-nuoc-3.jpg"
        },
        {
            id: "SP08",
            name: "Bàn uống nước",
            description: "4 ngăn, trắng gỗ",
            price: 2499000,
            image: "../assets/img/products/livingRoom/ban-uong-nuoc-4.jpg"
        },
        {
            id: "SP09",
            name: "Bàn uống nước",
            description: "Size vừa, nâu đậm",
            price: 8999000,
            image: "../assets/img/products/livingRoom/ban-uong-nuoc-5.jpg"
        },
        {
            id: "SP10",
            name: "Kệ đồ",
            description: "Size vừa, nâu vân gỗ",
            price: 3999000,
            image: "../assets/img/products/livingRoom/ke-do.jpg"
        },
        {
            id: "SP11",
            name: "Kệ đồ 2",
            description: "4 ngăn, gỗ lim",
            price: 12999000,
            image: "../assets/img/products/livingRoom/ke-do-2.jpg"
        },
        {
            id: "SP12",
            name: "Giá đồ",
            description: "4 ngăn, trắng gỗ",
            price: 2499000,
            image: "../assets/img/products/livingRoom/gia-do.jpg"
        }
    ],
    bedroom: [
        {
            id: "SP01",
            name: "Giường Châu Âu",
            description: "Size vừa, trắng sữa",
            price: 8999000,
            image: "../assets/img/products/bedroom/giuong-chau-au.jpg"
        },
        {
            id: "SP02",
            name: "Giường Gỗ",
            description: "Size vừa, nâu vân gỗ",
            price: 3999000,
            image: "../assets/img/products/bedroom/giuong-go.jpg"
        },
        {
            id: "SP03",
            name: "Kệ Đầu Giường",
            description: "2 ngăn, gỗ lim",
            price: 12999000,
            image: "../assets/img/products/bedroom/ke-dau-giuong.jpg"
        },
        {
            id: "SP04",
            name: "Tủ Quần Áo",
            description: "4 ngăn, trắng gỗ",
            price: 12499000,
            image: "../assets/img/products/bedroom/tu-quan-ao.jpg"
        }
    ],
    kitchen: [
        {
            id: "SP01",
            name: "Bàn Ăn 6",
            description: "Size vừa, trắng sữa",
            price: 8999000,
            image: "../assets/img/products/kitchen/ban-an-6.jpg"
        },
        {
            id: "SP02",
            name: "Bàn Trà",
            description: "Size vừa, nâu vân gỗ",
            price: 3999000,
            image: "../assets/img/products/kitchen/ban-tra.jpg"
        },
        {
            id: "SP03",
            name: "Bàn Ăn 4",
            description: "2 ngăn, gỗ lim",
            price: 12999000,
            image: "../assets/img/products/kitchen/ban-an-4.jpg"
        },
        {
            id: "SP04",
            name: "Bàn Ăn 8",
            description: "4 ngăn, trắng gỗ",
            price: 12499000,
            image: "../assets/img/products/kitchen/ban-an-8.jpg"
        }
    ],
    bathroom: [
        {
            id: "SP01",
            name: "Bồn Rửa Mặt",
            description: "Size vừa, trắng sữa",
            price: 8999000,
            image: "../assets/img/products/bathroom/bon-rua-mat.jpg"
        },
        {
            id: "SP02",
            name: "Bồn Rửa Tay",
            description: "Size vừa, nâu vân gỗ",
            price: 3999000,
            image: "../assets/img/products/bathroom/bon-rua-tay.jpg"
        },
        {
            id: "SP03",
            name: "Bồn Rửa 2",
            description: "2 ngăn, gỗ lim",
            price: 12999000,
            image: "../assets/img/products/bathroom/bon-rua-2.jpg"
        },
        {
            id: "SP04",
            name: "Tủ Âm Tường",
            description: "4 ngăn, trắng gỗ",
            price: 12499000,
            image: "../assets/img/products/bathroom/tu-am-tuong.jpg"
        }
    ],
    kids: [
        {
            id: "SP01",
            name: "Bàn Học",
            description: "Size vừa, trắng sữa",
            price: 8999000,
            image: "../assets/img/products/kids/ban-hoc.jpg"
        },
        {
            id: "SP02",
            name: "Giường Tầng",
            description: "Size vừa, nâu vân gỗ",
            price: 3999000,
            image: "../assets/img/products/kids/giuong-tang.jpg"
        },
        {
            id: "SP03",
            name: "Giường Tầng 2",
            description: "2 ngăn, gỗ lim",
            price: 12999000,
            image: "../assets/img/products/kids/giuong-tang-2.jpg"
        },
        {
            id: "SP04",
            name: "Cũi Trẻ Em",
            description: "4 ngăn, trắng gỗ",
            price: 12499000,
            image: "../assets/img/products/kids/cui-tre-em.jpg"
        }       
    ],
    office: [
        {
            id: "SP01",
            name: "Ghế Văn Phòng",
            description: "Size vừa, trắng sữa",
            price: 8999000,
            image: "../assets/img/products/office/ghe-van-phong.jpg"
        },
        {
            id: "SP02",
            name: "Bàn Làm Việc",
            description: "Size vừa, nâu vân gỗ",
            price: 3999000,
            image: "../assets/img/products/office/ban-lam-viec.jpg"
        },
        {
            id: "SP03",
            name: "Bàn Làm Việc 2",
            description: "2 ngăn, gỗ lim",
            price: 12999000,
            image: "../assets/img/products/office/ban-lam-viec-2.jpg"
        },
        {
            id: "SP04",
            name: "Giá Sách",
            description: "4 ngăn, trắng gỗ",
            price: 12499000,
            image: "../assets/img/products/office/gia-sach.jpg"
        }
    ],
    stairs: [
        {
            id: "SP01",
            name: "Cầu Thang 1",
            description: "Size vừa, trắng sữa",
            price: 8999000,
            image: "../assets/img/products/stairs/cau-thang-1.jpg"
        },
        {
            id: "SP02",
            name: "Cầu Thang 2",
            description: "Size vừa, nâu vân gỗ",
            price: 3999000,
            image: "../assets/img/products/stairs/cau-thang-2.jpg"
        },
        {
            id: "SP03",
            name: "Cầu Thang 3",
            description: "2 ngăn, gỗ lim",
            price: 12999000,
            image: "../assets/img/products/stairs/cau-thang-3.jpg"
        },
        {
            id: "SP04",
            name: "Cầu Thang 4",
            description: "4 ngăn, trắng gỗ",
            price: 12499000,
            image: "../assets/img/products/stairs/cau-thang-4.jpg"
        }
    ],
    decoration: [
        {
            id: "SP01",
            name: "Gương 1",
            description: "Size vừa, trắng sữa",
            price: 8999000,
            image: "../assets/img/products/decoration/guong-1.jpg"
        },
        {
            id: "SP02",
            name: "Gương 2",
            description: "Size vừa, nâu vân gỗ",
            price: 3999000,
            image: "../assets/img/products/decoration/guong-2.jpg"
        },
        {
            id: "SP03",
            name: "Ghế Đôn",
            description: "2 ngăn, gỗ lim",
            price: 12999000,
            image: "../assets/img/products/decoration/ghe-don.jpg"
        },
        {
            id: "SP04",
            name: "Đèn Chùm",
            description: "4 ngăn, trắng gỗ",
            price: 12499000,
            image: "../assets/img/products/decoration/den-chum.jpg"
        }
    ]
};

let translatedRooms = {'livingRoom': 'phòng khách', 'bedroom': 'phòng ngủ', 'kitchen': 'phòng bếp', 'bathroom': 'phòng tắm', 'kids': 'trẻ em', 'office': 'văn phòng', 'stairs': 'cầu thang', 'decoration': 'trang trí'}